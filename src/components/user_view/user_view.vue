<template>
  <div v-if="has_user">
    <p>用户名:</p>
    <p>{{this.user_info.FORIEGN_CNAME}}</p>
    <p>电话号码:</p>
    <p>{{this.user_info.FORIEGN_PHONENUM}}</p>
    <a @click="logout_click" class="button  button-pill button-small button-caution">注销</a>
  </div>
  <div v-else>
    <p>您尚未登录</p>
      <a @click="login_click" class="button  button-pill button-small button-primary ">登录</a>
  </div>
</template>

<script>
export default {
  name: 'user_view',
  data: function() {
    return {
      ori_title: '',
      user_info_ex:{}
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
    has_user:function() {
      return this.user_info_ex.flag; 
    },
    user_info(){
      if(this.has_user){
        return this.user_info_ex.data;
      }
      else{
          return {};
      }
    }
  },
  beforeDestroy: function() {
    this.$store.commit('do_change_title', this.ori_title);
  },
  methods: {
    logout_click() {
      console.log("注销");  
      var that = this;   
      that.$ajax({
          method: 'post',
          url: '/api/login/logout',
          data: {}
        }).then(function(res) {
          console.log(res);
             $.toast("注销");
      window.location="/#/";
        });
     
    },
    login_click() {
      console.log("登录");      
      window.location="/#/login";
    },
  },
};
</script>

<style scoped>
</style>