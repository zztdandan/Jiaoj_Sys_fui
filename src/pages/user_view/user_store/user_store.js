import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.config.productionTip = false;
export default new Vuex.Store({
  state: {
    menu_title: "柳州交警",
    has_footer: true
  },
  mutations: {
    //设置store的hasfoot值
    set_footer(state, bol) {
      state.has_footer = bol;
    },
    do_change_title(state,data){
      state.menu_title=data;
    }
    
  }
});
