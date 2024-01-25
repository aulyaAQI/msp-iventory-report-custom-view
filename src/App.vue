<script setup>
import DataTable from './components/DataTable.vue';
import FilterTable from './components/FilterTable.vue';
import {useFilterStore} from './stores/FilterStore';
import {useProductStore} from './stores/ProductStore';
import {DateTime} from 'luxon';

const productStore = useProductStore();
const filterStore = useFilterStore();

const currentMonth = DateTime.now().month;
const currentYear = DateTime.now().year;

filterStore.setFilterPeriod(currentMonth, currentYear);

filterStore.month = currentMonth;
filterStore.year = currentYear;
productStore.fetchProducts();
</script>

<template>
  <div class="p-3 bg-light">
    <FilterTable></FilterTable>
    <DataTable></DataTable>
  </div>
</template>
