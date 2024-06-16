// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Импорт Bootstrap CSS и JS
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap';
import './assets/main.css'
import store from "@/stores/counter.js";


// Импорт BootstrapVue3 и его стили
//import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
//import BootstrapVue3 from 'bootstrap-vue-3';

// Создание приложения Vue
const app = createApp(App);

// Использование BootstrapVue3
//app.use(BootstrapVue3);

// Использование других плагинов
app.use(createPinia());
app.use(router);
app.use(store);


// Монтирование приложения
app.mount('#app');
