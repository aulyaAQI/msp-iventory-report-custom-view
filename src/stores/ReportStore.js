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
    async generateReport(month, year) {
      const productStore = useProductStore();
      const receivingStore = useReceivingStore();

      const {products} = storeToRefs(productStore);
      const {records} = storeToRefs(receivingStore);

      console.log(products.value, 'productStore');
      console.log(records.value, 'receivingStore');
    },
  },
  getters: {},
});
