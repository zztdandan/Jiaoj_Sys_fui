<template>
    <!-- 首页 -->
    <div id="app">
        <!-- 页头页脚 -->
        <div id="vuecontent" class="page">
            <simple-header :ti="tit"></simple-header>
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
        tit: function() {
          return this.$store.state.vue_title;
        }
      },
      created:function(){
window.location="/#/login"
      }
    };
</script>

<style>
</style>
