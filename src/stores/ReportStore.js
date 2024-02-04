import {defineStore, storeToRefs} from 'pinia';
import {useFilterStore} from './FilterStore';
import {useProductStore} from './ProductStore';
import {useReceivingStore} from './ReceivingStore';
import {useProductionStore} from './ProductionStore';
import {DateTime} from 'luxon';

export const useReportStore = defineStore({
  id: 'report',
  state: () => ({
    reportList: [],
    isLoading: true,
  }),
  actions: {
    generateReport(month, year) {
      const productStore = useProductStore();
      const receivingStore = useReceivingStore();
      const productionStore = useProductionStore();

      const {products} = storeToRefs(productStore);
      const {records: receivingData} = storeToRefs(receivingStore);
      const {records: productionData} = storeToRefs(productionStore);

      console.log(products.value, 'productStore');

      const groupedReceiving = this.groupReceivingByPartNoAndSumQtyReceived(receivingData.value) || [];
      const groupedProduction = this.groupProductionByPartNoAndSumQtyOk(productionData.value) || [];
      const groupedIn = this.groupIn(groupedProduction, groupedReceiving);
      const inReference = this.generateInReference(groupedIn);

      const reportList = products.value.map((product) => {
        const inQuantity = inReference.find((group) => group.partNo === product.Part_No.value);

        if (inQuantity) console.log(inQuantity.in, 'inQuantity');
        return {
          partNo: product.Part_No.value,
          partName: product.Part_Name.value,
          in: inQuantity ? inQuantity.in : [],
          totalIn: inQuantity ? inQuantity.in.map((item) => item.in).reduce((acc, curr) => acc + curr, 0) : 0,
          // description: product.Description.value,
          // qtyReceived,
          // qtyOk,
        };
      });

      console.log({reportList});

      this.reportList = reportList;
    },
    groupReceivingByPartNoAndSumQtyReceived(records) {
      const mapped = records.map((record) => {
        const partNo = record.Part_No_0.value;
        const receivedDateKt = record.Receive_Date.value;
        const receivedDateLx = DateTime.fromISO(receivedDateKt);
        const receivedDay = receivedDateLx.toFormat('d');
        const qtyReceived = parseFloat(record.Qty_Received_0.value);

        return {
          partNo,
          receivedDay,
          qtyReceived,
        };
      });

      const result = [
        ...mapped
          .reduce((r, o) => {
            const key = `${o.partNo}-${o.receivedDay}`;

            const item =
              r.get(key) ||
              Object.assign({}, o, {
                qtyReceived: 0,
              });

            item.qtyReceived += o.qtyReceived;

            return r.set(key, item);
          }, new Map())
          .values(),
      ];

      return result;
    },
    groupProductionByPartNoAndSumQtyOk(records) {
      const mapped = records.map((record) => {
        const partNo = record.Part_Number_0.value;
        const productionDateKt = record.Production_Date.value;
        const productionDateLx = DateTime.fromISO(productionDateKt);
        const productionDay = productionDateLx.toFormat('d');
        const qtyOk = parseFloat(record.Qty_Ok.value);

        return {
          partNo,
          productionDay,
          qtyOk,
        };
      });

      const result = [
        ...mapped
          .reduce((r, o) => {
            const key = `${o.partNo}-${o.productionDay}`;

            const item =
              r.get(key) ||
              Object.assign({}, o, {
                qtyOk: 0,
              });

            item.qtyOk += o.qtyOk;

            return r.set(key, item);
          }, new Map())
          .values(),
      ];

      return result;
    },
    groupIn(groupedProduction, groupedReceiving) {
      const normalizedProduction = groupedProduction.map((production) => {
        return {
          partNo: production.partNo,
          day: production.productionDay,
          in: production.qtyOk,
        };
      });

      const normalizedReceiving = groupedReceiving.map((receiving) => {
        return {
          partNo: receiving.partNo,
          day: receiving.receivedDay,
          in: receiving.qtyReceived,
        };
      });

      const result = [
        ...[...normalizedProduction, ...normalizedReceiving]
          .reduce((r, o) => {
            const key = `${o.partNo}-${o.day}`;

            const item =
              r.get(key) ||
              Object.assign({}, o, {
                in: 0,
              });

            item.in += o.in;

            return r.set(key, item);
          }, new Map())
          .values(),
      ];

      return result;
    },
    generateInReference(groupIn) {
      const result = [
        ...groupIn
          .reduce((r, o) => {
            const key = `${o.partNo}`;

            const item =
              r.get(key) ||
              Object.assign({}, o, {
                in: [],
              });

            item.in.push({day: o.day, in: o.in});
            delete item.day;

            return r.set(key, item);
          }, new Map())
          .values(),
      ];

      return result;
    },
  },
  getters: {},
});
