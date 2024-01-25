import {defineStore} from 'pinia';
import {DateTime} from 'luxon';

export const useFilterStore = defineStore({
  id: 'filter',
  state: () => ({
    month: null,
    year: null,
  }),
  actions: {
    setFilterPeriod(month, year, event) {
      this.month = month;
      this.year = year;
    },
  },
});
