<template>

    <!-- 首页 -->
    <div id="app">
        <!-- 页头页脚 -->
        <div id="vuecontent" class="page">
            <simple-header>{{title}}</simple-header>
            <simple-footer></simple-footer>
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
      created: function() {},
      components: {
        "simple-header": MobileHeader,
        "simple-footer": MobileFooter
      },
      computed:{
          title:function(){
              if(this.$store.state.menu_title){
                  return this.$store.state.menu_title;
              }
              else{
                  return "柳州交警"
              }
          }
      }
    };
</script>

<style>
/* 由于light7的性质很讨厌，所以大部分引用采用在html全局引用方式，buttons和light7冲突，需要在它下方引入，必须在全局才有效 */
/* @import "#static/light7/css/light7.min.css"; */
/* @import "#static/css/buttons.css"; */

</style>
