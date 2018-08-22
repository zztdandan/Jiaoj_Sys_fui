<template>
    
       <div class="new-btn">
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
        console.log(1);
        var s = parseFloat($(".new-btn").css("width"));
        $(".new-btn").css("height", s);
        $(".menu-icon").css("font-size", s * 0.75);
        $(".menu-icon").css("line-height", 1.1);
        $(".case-item-title").css("font-size", s * 0.1);
        $(".case-item-title").css("line-height", 2.2);
        $(".case-item-title").css("margin-top", -s * 0.1);
      },
      updated: function() {
       
      }
    };
</script>

<style scoped>
.new-btn{
  text-align: center
}
.menu-icon{
  display: inline-block
}
.case-item-title{
  display: block
  }

</style>


    