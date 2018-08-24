import Vue from 'vue'
import Router from 'vue-router'
import user_view from '@/components/user_view/user_view'
import my_progress from '@/components/my_progress/my_progress'
import CaseStart from 'components/user_case/CaseStart';
import CaseNode from 'components/user_case/CaseNode';
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Router);

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'admin_view',
      component: user_view
    },
    //
    {
      path: '/read_progress',
      name: 'read',
      component:my_progress
    },
    {
      path: '/',
      name: 'case_start',
      component:CaseStart
    },
    {
      path: '/case_node',
      name: 'case_node',
      component:CaseNode
    }
  ]
})
