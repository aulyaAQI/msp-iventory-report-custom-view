<script setup>
import DataTable from './components/DataTable.vue';
import {useProductStore} from './stores/ProductStore';

const product = useProductStore();
product.fetchProducts();
</script>

<template>
  <div class="p-3 bg-light">
    <div class="border rounded p-3 bg-white table-responsive">
      <DataTable v-if="product.products.length"></DataTable>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>
