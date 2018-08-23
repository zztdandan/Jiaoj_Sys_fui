<template>
  <!-- 首页 -->
  <div id="app">
    <!-- 页头页脚 -->
    <div id="vuecontent" class="page">
      <simple-header>{{title}}</simple-header>
      <simple-footer v-if="has_footer"></simple-footer>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import MobileFooter from "components/Common_comp/MobileFooter";
  import MobileHeader from "components/Common_comp/MobileHeader";

  export default {
    name: "app",
    components: {
      "simple-header": MobileHeader,
      "simple-footer": MobileFooter
    },
    data: function() {
      return {};
    },
    computed: {
      has_footer: function() {
        return this.$store.state.has_footer;
      },

      title: function() {
        if (this.$store.state.menu_title) {
          return this.$store.state.menu_title;
        } else {
          return "用户页面";
        }
      }
    },
    created: function() {
      window.location = "/#/login";
    }
  };
</script>

<style>
</style>
