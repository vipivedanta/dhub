import Vue from 'vue'
import Vuex from 'vuex'

import Locale from './locale/';
import User from './user';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Locale,
    User
  }
})
