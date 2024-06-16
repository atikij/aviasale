// store/index.js

import { createStore } from 'vuex';

// Создаем новый экземпляр Vuex Store
const store = createStore({
  state: {
    // Состояние для данных пользователя
    user: {
      lastName: '',
      firstName: '',
      middleName: '',
      citizenship: '',
      passportSeries: '',
      passportNumber: '',
      birthDate: '',
      phone: '',
      email: '',
    },
    // Состояние для данных билетов
    tickets: [],
  },
  mutations: {
    // Мутации для изменения состояния (если необходимо)
    setUser(state, userData) {
      state.user = userData;
    },
    addTicket(state, ticketData) {
      state.tickets.push(ticketData);
    },
    // Другие мутации по мере необходимости
  },
  actions: {
    // Actions для выполнения асинхронных операций или комбинирования мутаций
    setUser({ commit }, userData) {
      commit('setUser', userData);
    },
    addTicket({ commit }, ticketData) {
      commit('addTicket', ticketData);
    },
    // Другие actions по мере необходимости
  },
  getters: {
    // Getters для получения состояния (если требуется дополнительная обработка)
    getUser(state) {
      return state.user;
    },
    getTickets(state) {
      return state.tickets;
    },
    // Другие getters по мере необходимости
  },
});

export default store;
