<template>
    <div>
        <light7-modal v-if="this.is_start" button_text="阅读完毕" @receive_from_child="modal_return">
            <template slot="title">{{start_info.title}}</template>
            <div v-html=" this.detail.notification"></div>
        </light7-modal>
        <build-form @receive_from_form="form_return" :FormArray="formList" :FormUrl="post_url" :ButtonArray="[]" :FormId="FId"></build-form>
    </div>
</template>

<script>
    import Ligth7_modal from "components/Common_comp/Ligth7_modal";
    import BuildForm from "components/buildForm_Light7/BuildForm";
    export default {
      name: "user-form-submit",
      props: {
        node_info: {
          type: Object,
          default: {}
        },
        progress_info: {
          type: Object,
          default: {}
        },
        is_start: {
          type: Boolean,
          default: false
        }
      },
      data: function() {
        return {
          start_info: {},
          post_url: "/api/user_form_submit",
          FId: "submit_form",
          detail: {}
        };
      },
      computed: {
        formList() {
          let a = this.detail.UserSubForm;
          let b = new Array();
          a.forEach(function(ti) {
            b.push(ti);
          });
          //添加一个隐藏输入，存储新增表单的case_id
          b.push({ type: "visi", id: "case_id", value: this.node_info.case_id });
          //添加一个隐藏输入，存储新表单的case_node_id
          b.push({ type: "visi", id: "case_node_id", value: this.node_info.rec_id });
          //添加提交按钮
          b.push({ type: "submit", label: "提交", value: "提交表单",addon_class: "button-primary" });
          if(this.progress_info){
            b.push({ type: "visi", id: "case_progress_id", value: this.progress_info.rec_id });
          }
          return b;
        }
      },
      created: function() {
        let k = JSON.parse(this.node_info.node_detail);
        this.detail = k;
        if (this.is_start) {
          this.start_info = {
            title: this.detail.notification_title,
            text: this.detail.notification
          };
        }
      },
      components: {
        "light7-modal": Ligth7_modal,
        "build-form":BuildForm
      },
      methods: {
        modal_return: function() {
          console.log("按钮回调成功");
        },
        form_return: function(a) {
          console.log("form回调成功");
        }
      }
    };
</script>

<style scoped>
</style>