import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
Vue.config.productionTip = false;
export default new Vuex.Store({
  state: {
    menu_title: '柳州交警',
    has_footer: true,
    //csexception格式的userinfo
    user_info_ex: {}
  },
  mutations: {
    //设置store的hasfoot值
    set_footer(state, bol) {
      state.has_footer = bol;
    },
    do_change_title(state, data) {
      state.menu_title = data;
    },
    check_user_info(state) {
        // 没有userinfo信息
        axios.get('/api/user_view/user_info').then(res => {
          if (typeof res.data == 'undefined' || typeof res.data.flag == 'undefined') {
            console.log('出现错误/api/user_view/case/case_info?cas', res);
          } else {
            state.user_info_ex = res.data;
          }
        });
      }
    }
  }
);
