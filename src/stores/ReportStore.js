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

      const reportList = products.value.map((product) => {
        const receivingRecords = records.value.filter((record) => {
          return record.Part_No.value === product.Part_No.value;
        });

        const totalQuantity = receivingRecords.reduce((acc, record) => {
          return acc + record.Quantity.value;
        }, 0);

        return {
          ...product,
          totalQuantity,
        };
      });

      this.reportList = reportList;
    },
  },
  getters: {},
});
