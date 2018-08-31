<template>
  <!-- 首页 -->
  <el-container>
    <el-header style="padding:0px">
      <el-menu mode="horizontal" @select="handleSelect" background-color="rgb(73, 80, 86)" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="admin_homepage">
          <h3>交警业务管理系统</h3>
        </el-menu-item>
        <div class="pull-right">
          <el-submenu index="admin_menu">
            <template slot="title">
              <span class="icon iconfont icon-shenqing"></span>
            </template>
            <el-menu-item index="login">用户登陆</el-menu-item>
            <el-menu-item index="logout">用户注销</el-menu-item>
            <el-menu-item index="user_auth">用户权限查看</el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside>
        <div class="side-background">
        <el-menu @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="admin_verify">
            <span slot="title">管理员业务审核</span>
          </el-menu-item>
          <el-menu-item index="admin_info">
            <span slot="title">管理员信息</span>
          </el-menu-item>
        </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>柳州交警 footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>

  export default {
    name: 'app',
    components: {},
    data: function() {
      return {};
    },
    computed: {},
    created: function() {},
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push({ name: key });
      }
    }
  };
</script>

<style scoped>
.pull-right {
  float: right;
}
.side-background {
  background-color: #545c64;
  height: 100%;
}
.el-menu {
  border-right: solid 1px #545c64;
}
.el-menu--horizontal {
  border-bottom: solid 1px #545c64;
}
</style>

