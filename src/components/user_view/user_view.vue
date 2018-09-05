<template>
  <div>
    <div v-if="has_user">
      <user-info-comp :user_info="user_info">
        <template slot="addon_button">
          <a @click="logout_click" class="button right-mag-3 button-pill button-small button-caution">注销</a>
        </template>
      </user-info-comp>

    </div>
    <div v-else>
      <user-info-comp :user_info="user_info_nolog">
        <template slot="addon_button">
          <a @click="login_click" class="button right-mag-3 button-pill button-small button-primary ">登录</a>
        </template>
      </user-info-comp>

      <p>尚未登陆</p>
    </div>

  </div>

</template>

<script>
  import UserInfoComp from 'components/user_view/user_info_comp';
  export default {
    name: 'user_view',
    data: function() {
      return {
        ori_title: '',
        user_info_ex: {},
        user_info_nolog: { FORIEGN_CNAME: '未登录', FORIEGN_PHONENUM: '未登录' }
      };
    },
    created: function() {
      var that = this;
      //设置下属状态栏的形态为“有”
      this.$store.commit('set_footer', true);
      this.ori_title = this.$store.state.menu_title;
      this.$store.commit('do_change_title', '用户信息');

      //获得用户信息
      that.$ajax.get('/api/user_view/user_info').then(res => {
        if (!res.data) {
          console.log('出现错误/api/user_view/case/case_info?cas', res);
          return;
        }
        that.user_info_ex = res.data;
      });
    },
    methods: {
      change: function() {
        alert(1);
      }
    },
    computed: {
      has_user: function() {
        return this.user_info_ex.flag;
      },
      user_info() {
        if (this.has_user) {
          return this.user_info_ex.data;
        } else {
          return {};
        }
      }
    },
    beforeDestroy: function() {
      this.$store.commit('do_change_title', this.ori_title);
    },
    methods: {
      logout_click() {
        console.log('注销');
        var that = this;
        that
          .$ajax({
            method: 'post',
            url: '/api/login/logout',
            data: {}
          })
          .then(function(res) {
            console.log(res);
            $.toast('注销');
           that.user_info_ex.flag=false;
           window.location.reload();
          });
      },
      login_click() {
        console.log('登录');
        window.location = '/#/login';
      }
    },
    components: {
      'user-info-comp': UserInfoComp
    }
  };
</script>

<style scoped>
.right-mag-3 {
  margin-right: 0.3rem;
}
</style>