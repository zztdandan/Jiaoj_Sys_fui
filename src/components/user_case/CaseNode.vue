<template>
    <div>
        <div v-bind:is="this.node_component" 
        v-bind:node_info="node_info" 
        v-bind:progress_info="progress_info"
         v-bind:is_start="is_start"
        ></div>
    </div>
</template>


<script>
    //以子组件的形式（子路由实现太费劲）实现所有表单及各色表达形式
    import USER_FACE_CHECK_Comp from "./USER_FACE_CHECK_Comp";
    import USER_FORM_SUBMIT_Comp from "./USER_FORM_SUBMIT_Comp";
    import USER_MSG_CHECK_Comp from "./USER_MSG_CHECK_Comp";
    import USER_PASS_Comp from "./USER_PASS_Comp";
    import USER_PAY_Comp from "./USER_PAY_Comp";
    import USER_SIGN_Comp from "./USER_SIGN_Comp";
    import USER_STUDY_Comp from "./USER_STUDY_Comp";
    import USER_TEST_Comp from "./USER_TEST_Comp";
    import CaseFlowchart from "components/Common_comp/CaseFlowchart";
    export default {
      name: "case-node",

      data() {
        return {
          node_detail: {},
          node_type: "",
          node_name: "",
          progress_info: {},
          is_start: false,
          ori_title: "",
          node_info:{}
        };
      },
      computed: {
        node_component: function() {
          String.prototype.myReplace = function(f, e) {
            //吧f替换成e
            var reg = new RegExp(f, "g"); //创建正则RegExp对象
            return this.replace(reg, e);
          };

          let tmp = this.node_type.myReplace("_", "-").toLowerCase();
          return tmp;
        }
      },
      created: function() {
        var that = this;
        let para_node_id = this.$route.query.node_id;
        let para_progress_id = this.$route.query.progress_id;
        this.$store.commit("set_footer", false);

        if (para_node_id) {
          //获得节点信息
          this.$ajax
            .get("/api/user_view/case/node_info?case_node_id=" + para_node_id)
            .then(function(res) {
              if (res.data && res.data.flag) {
                // console.log("CaseNode--GetNode", res.data.data);
                let node_info = res.data.data;
                // //测试用回调
                // that.node_detail = node_info;
                //粗暴获得整个node_info，后面可能需要调用
                that.node_info=node_info;
                that.node_detail = JSON.parse(node_info.node_detail);
                that.node_type = node_info.node_type;
                that.node_name = node_info.case_node_name;
                that.ori_title = that.$store.state.menu_title;
                that.$store.commit("do_change_title", that.node_name);
              } else {
                $.toast("读取节点信息出错");
              }
            });
        }

        if (para_progress_id && para_progress_id != "start") {
          this.$ajax
            .get(
              "/api/user_view/case/case_progress?case_progress_id=" +
                para_progress_id
            )
            .then(function(res) {
              if (res.data && res.data.flag) {
                console.log("CaseNode--GetProgress", res.data.data);
                let progress_info = res.data.data;
                // //测试用回调
                // that.node_detail = node_info;
                progress_info.CONTENT = JSON.parse(res.data.data.CONTENT);
                that.progress_info = progress_info;
              } else {
                $.toast("读取业务流程信息出错");
              }
            });
        } else {
          if (para_progress_id) {
            this.is_start = true;
          }
        }
      },
      components: {
        "case-flow-chart": CaseFlowchart,
        "user-face-check": USER_FACE_CHECK_Comp,
        "user-form-submit": USER_FORM_SUBMIT_Comp,
        "user-msg-check": USER_MSG_CHECK_Comp,
        "user-pass": USER_PASS_Comp,
        "user-pay": USER_PAY_Comp,
        "user-sign": USER_SIGN_Comp,
        "user-study": USER_STUDY_Comp,
        "user-test": USER_TEST_Comp
      },

      beforeDestroy: function() {
        this.$store.commit("do_change_title", this.ori_title);
      }
    };
</script>

<style scoped>
</style>