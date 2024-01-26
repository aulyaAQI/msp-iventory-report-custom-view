<script setup>
import {useProductStore} from '../stores/ProductStore';
import {useReceivingStore} from '../stores/ReceivingStore';
import {useReportStore} from '../stores/ReportStore';
import {useFilterStore} from '../stores/FilterStore';
import {storeToRefs} from 'pinia';

const productStore = useProductStore();
const receivingStore = useReceivingStore();
const reportStore = useReportStore();
const filterStore = useFilterStore();

const {products} = storeToRefs(productStore);
const {records: receivingData} = storeToRefs(receivingStore);
const {reportList: reportData} = storeToRefs(reportStore);

filterStore.$subscribe(async (mutation, state) => {
  console.log(mutation, 'mutation filterStore');
  console.log(state, 'state filterStore');
  await receivingStore.fetchReceiving();

  const {records: receivingData} = storeToRefs(receivingStore);
  console.log({receivingData});
});

receivingStore.$subscribe((mutation, state) => {
  console.log(mutation, 'mutation receivingStore');
  console.log(state, 'state receivingStore');
});
</script>

<template>
  <div class="border rounded p-3 bg-white table-responsive">
    <div v-if="products.length">
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
            <tr class="table-hover">
              <td rowspan="2">{{ item.Part_No.value }}</td>
              <td rowspan="2">{{ item.Part_Name.value }}</td>
              <td rowspan="2">0</td>
              <td>In</td>
              <td v-for="(n, idx) in 31" :key="n">{{ '-' }}</td>
              <td rowspan="2">0</td>
              <td rowspan="2">0</td>
              <td rowspan="2">0</td>
            </tr>
            <tr class="table-hover">
              <td>Out</td>
              <td v-for="(n, idx) in 31" :key="n">{{ '-' }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
