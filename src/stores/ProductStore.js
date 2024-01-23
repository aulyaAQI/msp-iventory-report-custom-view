import {defineStore} from 'pinia';
import {KintoneRestAPIClient} from '@kintone/rest-api-client';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const databaseProductClient = new KintoneRestAPIClient({
          auth: {apiToken: 'y60ItXXtrvmzw1jbXMoakjb33EEhtwDyuEwczwau'},
        });

        const records = await databaseProductClient.record.getAllRecords({app: 1905});
        console.log('Fetched products:', records);

        this.products = records;

        console.log(this.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error as needed
      }
    },
  },
});
