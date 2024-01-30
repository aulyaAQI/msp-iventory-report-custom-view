import {defineStore, storeToRefs} from 'pinia';
import {useFilterStore} from './FilterStore';
import {useProductStore} from './ProductStore';
import {useReceivingStore} from './ReceivingStore';

export const useReportStore = defineStore({
  id: 'report',
  state: () => ({
    reportList: [],
  }),
  actions: {
    generateReport(month, year) {
      const productStore = useProductStore();
      const receivingStore = useReceivingStore();

      const {products} = storeToRefs(productStore);
      const {records} = storeToRefs(receivingStore);

      console.log(products.value, 'productStore');
      console.log(records.value, 'receivingStore');

      const filteredRecords = this.groupReceivingByPartNoAndSumQtyReceived(records.value);
      console.log({filteredRecords});

      if (!filteredRecords.length) return {};

      const reportList = products.value.map((product) => {
        const receivingReference = filteredRecords[product.Part_No.value];

        const qtyReceived = receivingReference ? receivingReference.qtyReceived : 0;

        return {
          partNo: product.Part_No.value,
          // description: product.Description.value,
          qtyReceived,
        };
      });

      console.log({reportList});

      this.reportList = reportList;
    },
    groupReceivingByPartNoAndSumQtyReceived(records) {
      const filteredRecords = records.reduce((acc, record) => {
        // const {partNo, qtyReceived} = record;
        const partNo = record.Part_No_0.value;
        const qtyReceived = parseFloat(record.Qty_Received_0.value);

        if (!acc[partNo]) {
          acc[partNo] = {partNo, qtyReceived};
        } else {
          acc[partNo].qtyReceived += qtyReceived;
        }
        return acc;
      }, {});
      return Object.values(filteredRecords);
    },
  },
  getters: {},
});
