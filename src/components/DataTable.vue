<script setup>
import {useProductStore} from '../stores/ProductStore';
import {computed} from 'vue';

const productStore = useProductStore();
const products = productStore.products;

console.log(products, 'products');
</script>

<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th colspan="38" class="text-center">Month</th>
      </tr>
      <tr>
        <th>Part No</th>
        <th>Part Name</th>
        <th>Beginning Stock</th>
        <th>In/Out</th>
        <th v-for="(n, idx) in 31" :key="n">{{ n }}</th>
        <th>Total In</th>
        <th>Total Out</th>
        <th>Ending Stock</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in products" :key="item.$id.value">
        <tr>
          <td rowspan="2">{{ item.Part_No.value }}</td>
          <td rowspan="2">{{ item.Part_Name.value }}</td>
          <td rowspan="2">0</td>
          <td>In</td>
          <td v-for="(n, idx) in 31" :key="n">{{ '-' }}</td>
          <td rowspan="2">0</td>
          <td rowspan="2">0</td>
          <td rowspan="2">0</td>
        </tr>
        <tr>
          <td>Out</td>
          <td v-for="(n, idx) in 31" :key="n">{{ '-' }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
