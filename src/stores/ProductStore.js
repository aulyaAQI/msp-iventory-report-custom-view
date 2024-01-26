import {defineStore} from 'pinia';
import {KintoneRestAPIClient} from '@kintone/rest-api-client';
import {useFilterStore} from './FilterStore';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    isLoading: true,
  }),
  actions: {
    async fetchProducts() {
      try {
        const databaseProductClient = new KintoneRestAPIClient({
          auth: {apiToken: 'y60ItXXtrvmzw1jbXMoakjb33EEhtwDyuEwczwau'},
        });

        const records = await databaseProductClient.record.getAllRecords({
          app: 1905,
        });

        this.products = records;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error as needed
      }
    },
  },
  getters: {
    getProducts() {
      return this.products;
    },
  },
});
