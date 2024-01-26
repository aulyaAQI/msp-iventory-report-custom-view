import {defineStore} from 'pinia';
import {useFilterStore} from './FilterStore';
import {useProductStore} from './ProductStore';
import {DateTime} from 'luxon';
import {KintoneRestAPIClient} from '@kintone/rest-api-client';

const receivingAppClient = new KintoneRestAPIClient({
  auth: {
    apiToken: 'vuRejYyE1NH8ejX0hl7te182wxNsxS1OBP4qI4Lb',
  },
});

export const useReceivingStore = defineStore({
  id: 'receiving',
  state: () => ({
    records: [],
    isLoading: true,
  }),
  actions: {
    async fetchReceiving() {
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

      const condition = `Receive_Date >= "${startDate}" and Receive_Date <= "${endDate}" and Part_No in (${products})`;
      console.log({condition});

      try {
        const records = await receivingAppClient.record.getAllRecords({
          app: 1940,
          condition,
        });
        console.log('Fetched receiving:', records);

        this.records = records;
        this.isLoading = false;

        console.log(this.records, 'receiving');
      } catch (error) {
        console.error('Error fetching receiving:', error);
        // Handle error as needed
      }
    },
  },
});
