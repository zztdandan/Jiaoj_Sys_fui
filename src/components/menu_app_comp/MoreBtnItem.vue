<template>

  <div @click="push_more_router">
    <p>{{item_detail.MENU_TITLE}}</p>
  </div>
</template>

<script>
  export default {
    name: "MoreBtnItem",
    props: ["itemdetail"],
    data: function() {
      return {
        item_detail: this.itemdetail
      };
    },
    mounted: function() {
      // console.log(1);
      // var s = parseFloat($(".new-btn").css("width"));
      // $(".new-btn").css("height", s*1.2);
      // $(".menu-icon").css("font-size", s * 0.75);
      // $(".menu-icon").css("line-height", 1.1);
      // $(".case-item-title").css("font-size", s *0.15);
      // $(".case-item-title").css("line-height", 1);
    },
    methods: {
      push_more_router: function() {
        //将信息推入store临时存储，作为中间变量，在路由跳转后可以马上读取出来
        this.$store.commit("do_more_case_list", this.itemdetail.MENU_LIST);
        //query:中文名用于显示在头部
        this.$router.push({
          path: this.item_detail.MENU_URL,
          query: { cate: this.item_detail.MENU_CATE }
        });
      }
    }
  };
</script>

<style scoped>
.new-btn {
  text-align: center;
}
.menu-icon {
  display: inline-block;
}
.case-item-title {
  display: block;
}
</style>
