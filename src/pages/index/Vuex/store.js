import Vue from 'vue';
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);
Vue.config.productionTip = false;
export default new Vuex.Store({
  state: {
    more_case_list:[],
    menu_title:"柳州交警"
  },
  mutations: {
    do_more_case_list(state,data) {
      state.more_case_list=data;
    },
    do_change_title(state,data){
      state.menu_title=data;
    }
  }
});