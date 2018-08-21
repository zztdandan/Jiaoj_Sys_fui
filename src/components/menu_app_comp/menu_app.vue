
<template>
    <div>

    </div>
</template>

<script>
    // 引入 axios
    import axios from "axios";

    export default {
      name: "menu_app",
      data: function() {
        return {
          menu_cate_list: [],
          menu_list: []
        };
      },
      computed: {
        obj_menu_build: function() {
          return this.menuid + 1;
        }
      },
      created: function() {
        //标准利用vuex读取axios的流程
        this.$store.state.get_url = "/api/user_menu";
        this.$store.commit("axios_get");
        // console.log(1);
        // console.log(this.$store.state.axios_getobj);
        this.menu_list.push(this.$store.state.axios_getobj) ;
        //读取目录列表完毕
        //接下来读取大类列表
        this.$store.state.get_url = "/api/user_menu/dic";
        this.$store.commit("axios_get");
        this.menu_cate_list.push(this.$store.state.axios_getobj);
      }
    };
</script>
