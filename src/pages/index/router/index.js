import Vue from 'vue'
import Router from 'vue-router'
import menu_app_comp from '@/components/menu_app_comp/menu_app'
import login_comp from '@/components/login_comp'
import Case_item_more from 'components/menu_app_comp/Case_item_more'
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu_app',
      component: menu_app_comp
    },
    {
      path: '/login',
      name: 'login',
      component: login_comp
    },
    {
      path: '/more_case',
      name: 'more_case',
      component: Case_item_more
    }
  ]
})
