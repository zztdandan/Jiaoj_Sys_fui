import Vue from 'vue'
import Router from 'vue-router'
import admin_homepage from 'components/admin_view/admin_homepage';
import admin_verify from 'components/admin_view/admin_veri_page';
import admin_do_veri from 'components/admin_veri_Build/admin_do_veri';
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Router);

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'admin_homepage',
      component: admin_homepage
    },
    {
      path: '/admin_verify',
      name: 'admin_verify',
      component: admin_verify
    },
    {
      path: '/admin_do_veri',
      name: 'admin_do_veri',
      component: admin_do_veri
    }
    // //
    // {
    //   path: '/read_progress',
    //   name: 'read',
    //   component:my_progress
    // },
    // {
    //   path: '/',
    //   name: 'case_start',
    //   component:CaseStart
    // },
    // {
    //   path: '/case_node',
    //   name: 'case_node',
    //   component:CaseNode
    // }
  ]
})
