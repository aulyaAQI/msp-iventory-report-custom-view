<script setup>
import DataTable from './components/DataTable.vue';
import FilterTable from './components/FilterTable.vue';
import {useFilterStore} from './stores/FilterStore';
import {useProductStore} from './stores/ProductStore';
import {DateTime} from 'luxon';
import {onMounted} from 'vue';

const productStore = useProductStore();
const filterStore = useFilterStore();

const currentMonth = DateTime.now().month;
const currentYear = DateTime.now().year;

onMounted(async () => {
  await productStore.fetchProducts();
  filterStore.setFilterPeriod(currentMonth, currentYear);
});

</script>

<template>
  <div class="p-3 bg-light">
    <FilterTable />
    <DataTable />
  </div>
</template>
