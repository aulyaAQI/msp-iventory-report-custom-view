import {defineStore} from 'pinia';
import {useFilterStore} from './FilterStore';
import {useProductStore} from './ProductStore';
import {DateTime} from 'luxon';
import {KintoneRestAPIClient} from '@kintone/rest-api-client';

const productionAppClient = new KintoneRestAPIClient({
  baseUrl: 'https://aqi-demo.cybozu.com',
  auth: {
    apiToken: 'j8Dyn5lPgH57SWWnz4bkdpWfLYstHqQMhKQHUODE',
  },
});

export const useProductionStore = defineStore({
  id: 'production',
  state: () => ({
    records: [],
    isLoading: true,
  }),
  actions: {
    async fetchProduction() {
      const filterStore = useFilterStore();
      const productStore = useProductStore();

      const filterMonth = filterStore.month;
      const filterYear = filterStore.year;
      const products = productStore.products
        .map((item) => {
          return `"${item.Part_No.value}"`;
        })
        .join(',');

      const startDate = DateTime.fromObject({
        year: filterYear,
        month: filterMonth,
        day: 1,
      }).toISODate();

      const endDate = DateTime.fromObject({
        year: filterYear,
        month: filterMonth,
        day: 1,
      })
        .endOf('month')
        .toISODate();

      const condition = `Production_Date >= "${startDate}" and Production_Date <= "${endDate}" and Part_Number_0 in (${products})`;
      console.log({condition});

      try {
        const records = await productionAppClient.record.getAllRecords({
          app: 1958,
          condition,
        });
        console.log('Fetched production:', records);

        this.records = records;
        this.isLoading = false;

        console.log(this.records, 'production');
      } catch (error) {
        console.error('Error fetching production:', error);
        // Handle error as needed
      }
    },
  },
});
