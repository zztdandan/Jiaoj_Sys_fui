import Vue from 'vue';
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);
Vue.config.productionTip = false;
export default new Vuex.Store({
  state: {
    more_case_list:{}
  },
  mutations: {
    do_more_case_list(state,data) {
      state.more_case_list=data;
    }
  }
});