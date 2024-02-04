<script setup>
import {useProductStore} from '../stores/ProductStore';
import {useReceivingStore} from '../stores/ReceivingStore';
import {useReportStore} from '../stores/ReportStore';
import {useFilterStore} from '../stores/FilterStore';
import {useProductionStore} from '../stores/ProductionStore';
import {storeToRefs} from 'pinia';

const productStore = useProductStore();
const receivingStore = useReceivingStore();
const reportStore = useReportStore();
const filterStore = useFilterStore();
const productionStore = useProductionStore();

const {products} = storeToRefs(productStore);
const {records: receivingData} = storeToRefs(receivingStore);
const {reportList: reportData} = storeToRefs(reportStore);
const {records: productionData} = storeToRefs(productionStore);

filterStore.$subscribe(async (mutation, state) => {
  console.log(mutation, 'mutation filterStore');
  console.log(state, 'state filterStore');
  await receivingStore.fetchReceiving();
  await productionStore.fetchProduction();

  reportStore.generateReport();

  const {records: receivingData} = storeToRefs(receivingStore);
  const {records: productionData} = storeToRefs(productionStore);
  console.log({receivingData, productionData});
});

function obtainIn(data, number) {
  const findDay = data.in.find(dataIn => {

    console.log({dataIn});

    return dataIn.day === number.toString();
  });

  if (findDay) return findDay.in;

  return '-';
}
</script>

<template>
  <div class="border rounded p-3 bg-white table-responsive">
    <div v-if="reportData.length">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th
              colspan="38"
              class="text-center"
            >
              Month
            </th>
          </tr>
          <tr>
            <th>Part No</th>
            <th>Part Name</th>
            <th>Beginning Stock</th>
            <th>In/Out</th>
            <th
              v-for="(n) in 31"
              :key="n"
            >
              {{ n }}
            </th>
            <th>Total In</th>
            <th>Total Out</th>
            <th>Ending Stock</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="data in reportData"
            :key="data.partNo"
          >
            <tr class="table-hover">
              <td rowspan="2">
                {{ data.partNo }}
              </td>
              <td rowspan="2">
                {{ data.partName }}
              </td>
              <td rowspan="2">
                0
              </td>
              <td>In</td>
              <td
                v-for="(n) in 31"
                :key="n"
              >
                {{ obtainIn(data, n) }}
              </td>
              <td rowspan="2">
                {{ data.totalIn }}
              </td>
              <td rowspan="2">
                0
              </td>
              <td rowspan="2">
                0
              </td>
            </tr>
            <tr class="table-hover">
              <td>Out</td>
              <td
                v-for="(n) in 31"
                :key="n"
              >
                {{ '-' }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>
