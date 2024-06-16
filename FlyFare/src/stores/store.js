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
  },
  actions: {
    setUser({ commit }, userData) {
      commit('setUser', userData);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
});

export default store;
