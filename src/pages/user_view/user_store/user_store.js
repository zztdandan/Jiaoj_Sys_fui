import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.config.productionTip = false;
export default new Vuex.Store({
  state: {
    vue_title: "柳州交警",
    has_footer: true
  },
  mutations: {
    //设置store的hasfoot值
    set_footer(state, bol) {
      state.has_footer = bol;
    },
    set_title(state, title) {
      state.vue_title = title;
    }
  }
});
