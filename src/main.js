import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {createPinia} from 'pinia';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

try {
  const initVueApp = () => {
    const pinia = createPinia();
    const app = createApp(App);
    app.use(pinia);
    app.mount('#app');
  };

  const allowedViewId = [6480610];

  // cek jika script berjalan di aplikasi kintone
  if (typeof kintone !== 'undefined') {
    // run aplikasi vue jika kintone app sudah terload semua
    kintone.events.on('app.record.index.show', (event) => {
      // pastikan hanya jalan pada view id yang di inginkan
      if (!event.viewId || !allowedViewId.includes(Number(event.viewId))) return event;
      initVueApp();
      return event;
    });
  } else {
    initVueApp();
    console.log(`kintone view not run`);
  }
} catch (e) {}
