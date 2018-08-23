<template>
  <!-- 展示该cate下所有菜单项的控件 -->
  <div>
    <card-common title="更多业务">
      <div class="row">
        <div v-for="case_item in case_list" v-bind:key="case_item.REC_ID" class="col-xs-3">
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
  export default {
    name: "cate-menu-more",
    data() {
      return {
        cate_title: "",
        ori_title: "",
        case_list: []
      };
    },
    created: function() {
      this.cate_title = this.$route.query.cate;
      this.ori_title = this.$store.state.menu_title;
      this.case_list = this.$store.state.more_case_list;
      this.$store.commit("do_change_title", this.cate_title);
    },
    beforeDestroy: function() {
      this.$store.commit("do_change_title", this.ori_title);
    },
    components: {
      "case-item": CaseItem,
      "card-common": CardCommon
    }
  };
</script>

<style scoped>
</style>