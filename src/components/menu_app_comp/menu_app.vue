
<template>
  <div class="app-menu">
    <image-block :imgurl="image_list"></image-block>
    <case-menu-block v-for="one_cate in menu_list" v-bind:key="one_cate.name" :one_cate_case_obj="one_cate">      
    </case-menu-block>
  </div>
</template>

<script>
  // 引入 axios
  import ImageBlock from "./ImageBlock";
  import CateMenuBlock from "./CateMenuBlock";
  export default {
    name: "menu_app",
    data: function() {
      return {
        menu_cate_list: [],
        menu_list: [],
        image_list: ["/static/home1.jpg"]
      };
    },
    computed: {
      obj_menu_build: function() {
        return this.menuid + 1;
      }
    },
    mounted: function() {
      //标准利用vuex读取axios的流程
      var that = this;
      this.$ajax.get("/api/user_menu/allmenu").then(function(res) {
        if (!res) {
          $.toast("无法读取菜单，等待修复");
        }
        if (!res.data.flag) {
          $.toast("无法读取菜单，等待修复");
        }
        that.menu_list = res.data.data;
      });
    },
    components: {
      "image-block": ImageBlock,
      "case-menu-block":CateMenuBlock
    }
  };
</script>
<style scoped>
.app-menu{
  overflow: overlay;
}
</style>

