import { createStore } from 'vuex';

const store = createStore({
  state: {
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
    tickets: [],
  },
  mutations: {
    setUser(state, userData) {
      state.user = { ...state.user, ...userData };
    },
    addTicket(state, ticket) {
      console.log(ticket)
      state.tickets.push(ticket);
    },
  },
  actions: {
    setUser({ commit }, userData) {
      commit('setUser', userData);
    },
    addTicket({ commit }, ticket) {
      commit('addTicket', ticket);
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
   
  },
});

export default store;
