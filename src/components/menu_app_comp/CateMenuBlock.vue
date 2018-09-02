<template>
  <!-- 每个大类卡片归类为一个组件 -->
  <div :id="cate_id">
    <card-common :title="case_title">
      <template slot="header">
        <p>{{case_title}}</p>
        <more-btn-item class="pull-right" v-if="has_add" :itemdetail="more_item_detail"></more-btn-item>
      </template>
      <div class="row">
        <div v-for="case_item in case_index" v-bind:key="case_item.REC_ID" class="col25">
          <case-item :itemdetail="case_item">
          </case-item>
        </div>
      </div>
    </card-common>
  </div>
</template>

<script>
  import CaseItem from "./CaseItem";
  import CardCommon from "components/Common_comp/CardCommon";
  import MoreBtnItem from "./MoreBtnItem";
  export default {
    props: {
      one_cate_case_obj: {
        type: Object,
        default: {}
      }
    },
    data: function() {
      return {
        cate_id: this.one_cate_case_obj.name + "_cate",
        case_index: this.one_cate_case_obj.show_menu,
        case_title: this.one_cate_case_obj.c_name,
        more_case: [],
        has_add: this.one_cate_case_obj.has_add,
        more_item_detail:{}
      };
    },
    created: function() {
      this.more_case = this.one_cate_case_obj.more_menu.concat(
        this.one_cate_case_obj.show_menu
      );
      this.more_item_detail= {
          MENU_TITLE: "+更多业务",
          MENU_CATE: this.one_cate_case_obj.c_name,
          MENU_URL: "/more_case",
          MENU_CLASS: "icon iconfont icon-zhuxiao1 menu-icon hongse",
          MENU_LIST:this.more_case
        };
    },
    computed: {
     
    },
    components: {
      "case-item": CaseItem,
      "card-common": CardCommon,
      "more-btn-item": MoreBtnItem
    }
  };
</script>
<style scoped>
.pull-right{
  float:right;
  margin-right:0.75rem;
}
.col25{
  float: left;
  width: 25%;
}
.row {
    margin-left: 0px;
    margin-right: 0px;
}
</style>

