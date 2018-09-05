<template>

  <div class="new-btn" @click="click_btn">
    <span :class="item_detail.MENU_CLASS"></span>
    <span class="case-item-title">{{item_detail.MENU_TITLE}}</span>
  </div>
</template>

<script>
  export default {
    name: 'CaseItem',
    props: ['itemdetail'],
    data: function() {
      return {
        item_detail: this.itemdetail
      };
    },

    mounted: function() {
      // console.log(this.item_detail.MENU_URL + this.item_detail.MENU_ID);
      // console.log(1);
      var s = parseFloat($('.new-btn').css('width'));
      $('.new-btn').css('height', s * 0.8);
      $('.menu-icon').css('font-size', s * 0.3);
      $('.menu-icon').css('line-height', 1);
      $('.case-item-title').css('font-size', s * 0.1);
      $('.case-item-title').css('line-height', 1.1);
      $('.case-item-title').css('margin-top', '.3rem');
    },
    updated: function() {},
    methods: {
      click_btn: function() {
        window.location = this.item_detail.MENU_URL + '?' + this.item_detail.MENU_ID;
      }
    }
  };
</script>

<style scoped>
.new-btn {
  text-align: center;
  padding: 0.3rem;
  /* border: solid 1px #a5a3a3; */
  margin: -1px -0.5px;
}
.menu-icon {
  display: inline-block;
}
</style>
<style>
.case-item-title {
  display: block;
}
.color-primary {
  color: #505ebf;
}
.color-action {
  color: #92af65;
}
.color-caution {
  color: #cd4452;
}
.color-royal {
  color: #9c6fc0;
}

.color-warning {
  color: #adab3b;
}
</style>


    