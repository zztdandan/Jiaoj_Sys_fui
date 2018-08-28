// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./admin_view.vue";
import store from './admin_store/admin_store';
import router from "./router";
import axios from 'axios';
import jqueryform from '#static/js/jquery.form';
Vue.prototype.$ajax=axios;
/* eslint-disable no-new */
var vm1 = new Vue({
  el: "#app",
  store,//使用store
  template: "<App/>",
  router,
  data:function(){
    return{
      
    }
  },
  components: { App }
});