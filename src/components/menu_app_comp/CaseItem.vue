<template>

  <div class="new-btn" @click="click_btn">
    <span :class="item_detail.MENU_CLASS"></span>
    <span class="case-item-title">{{item_detail.MENU_TITLE}}</span>
  </div>
</template>

<script>
  export default {
    name: "CaseItem",
    props: ["itemdetail"],
    data: function() {
      return {
        item_detail: this.itemdetail
      };
    },

    mounted: function() {
      console.log(this.item_detail.MENU_URL + this.item_detail.MENU_ID);
      // console.log(1);
      var s = parseFloat($(".new-btn").css("width"));
      $(".new-btn").css("height", s*1.2);
      $(".menu-icon").css("font-size", s * 0.75);
      $(".menu-icon").css("line-height", 1.1);
      $(".case-item-title").css("font-size", s * 0.15);
      $(".case-item-title").css("line-height", 1);
    },
    updated: function() {},
    methods: {
      click_btn: function() {
        window.location = this.item_detail.MENU_URL +"?"+ this.item_detail.MENU_ID;
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


    