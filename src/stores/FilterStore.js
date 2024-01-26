import {defineStore} from 'pinia';
import {DateTime} from 'luxon';

export const useFilterStore = defineStore({
  id: 'filter',
  state: () => ({
    month: 1,
    year: 2000,
  }),
  actions: {
    setFilterPeriod(month, year, event) {
      this.month = month;
      this.year = year;
    },
  },
});
