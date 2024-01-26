<script setup>
import {useFilterStore} from '../stores/FilterStore';
import {useProductStore} from '../stores/ProductStore';
import {useReceivingStore} from '../stores/ReceivingStore';
import {useReportStore} from '../stores/ReportStore';
import {storeToRefs} from 'pinia';
import {onMounted} from 'vue';

const filterStore = useFilterStore();
const productStore = useProductStore();
const receivingStore = useReceivingStore();
const reportStore = useReportStore();

const {month: selectedMonth, year: selectedYear} = storeToRefs(filterStore);
productStore.fetchProducts();

console.log(selectedMonth.value, 'selectedMonth');
console.log(selectedYear.value, 'selectedYear');
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col-xs-6">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <label class="col-xs-12">Month</label>
            </div>
            <div class="col-xs-12 col-sm-6">
              <label class="col-xs-12">Year</label>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <select class="form-select" v-model="selectedMonth">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6">
              <input class="form-control" type="number" min="2000" max="3000" v-model="selectedYear" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
