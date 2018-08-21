import Vue from 'vue';
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);
Vue.config.productionTip = false;
export default new Vuex.Store({
  state: {
    axios_getobj: {},
    get_url: "",
    a:""
  },
  mutations: {
    axios_get(state) {
      var that = this;
      axios
        .get(state.get_url)
        .then(function(res) {
            // console.log("-----------触发一次axios_get,下面是结果----------");
        //   console.log(res.data);
          that.state.axios_getobj = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
});