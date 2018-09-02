
<template>
  <div class="app-menu">
    <!-- <div class="bar bar-header-secondary">

      <div class="search-input search-col-75">
        <label class="icon icon-search" for="search"></label>
        <input type="search" id='search' placeholder='query...' />
      </div>
      <button class="button button-fill button-primary search-col-25">搜索</button>
    </div> -->
    <image-block :imgurl="image_list"></image-block>
    <case-menu-block v-for="one_cate in menu_list" v-bind:key="one_cate.name" :one_cate_case_obj="one_cate">
    </case-menu-block>

  </div>
</template>

<script>
// 引入 axios
import ImageBlock from './ImageBlock';
import CateMenuBlock from './CateMenuBlock';
import SidePanel from './side_panel';
export default {
  name: 'menu_app',
  data: function() {
    return {
      menu_cate_list: [],
      menu_list: [],
      image_list: ['/static/newhome.jpg']
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
    this.$ajax.get('/api/user_menu/allmenu').then(function(res) {
      if (!res) {
        $.toast('无法读取菜单，等待修复');
      }
      if (!res.data.flag) {
        $.toast('无法读取菜单，等待修复');
      }
      that.menu_list = res.data.data;
    });
  },
  components: {
    'image-block': ImageBlock,
    'case-menu-block': CateMenuBlock
  }
};
</script>
<style scoped>
.app-menu {
  overflow: overlay;
}
.page {
  background: white;
}
.bar {
  background-color: #0a4b8b;
  border-bottom: 0px solid #e7e7e7;
}
.search-col-75 {
  width: 75%;
  float: left;
}
.search-col-25{
  width: 22%;
  float: right;
  height: auto;
}
</style>

