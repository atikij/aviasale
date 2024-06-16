// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css'
import store from "@/stores/store.js";



// Создание приложения Vue
const app = createApp(App);


// Использование других плагинов
app.use(createPinia());
app.use(router);
app.use(store);


// Монтирование приложения
app.mount('#app');
