<template>
  <!-- 创造表单的基控件，输入array后返回一个表单 -->
  <form :id="formid" :action="FormUrl" :method="FormAction" enctype="multipart/form-data">
    <div class="list-block">
      <ul>
        <li-container v-bind:params="item" v-for="item in FormArray" :key="item.id"></li-container>
      </ul>
    </div>
  </form>
</template>

<script>
  // 标准的array类输入格式:
  // { type: "visi", id: "case_id", value: "",label:"标题" }
  // 支持的type:picture-modal,text,submit,visi,number
  import LiContainer from "components/buildForm_Light7/LiContainer";

  export default {
    name: "build-form",
    props: {
      //所有form的表单列表
      FormArray: { type: Array, default: [] },
      //按钮列表
      ButtonArray: { type: Array, default: [] },
      FormAction: { type: String, default: "POST" },
      FormUrl: { type: String, default: "/api" },
      FormId: { type: String, default: "SubForm" }
    },
    data() {
      return {};
    },
    computed: {
      formid() {
        return this.FormId;
      }
    },
    mounted: function() {
      $("#" + FormId).ajaxForm(function(data) {
        console.log("成功进入jqueryform内部");
        if (typeof data.code == "undefined") {
          $.alert("出现严重错误");
        }
        if (data.Flag) {
          // 这个是成功的
          this.$options.methods.send_to_parent(data.data);
        } else {
          $.toast("格式错误，发生失败");
        }
      });
    },
    methods: {
      send_to_parent(data) {
        this.$emit("receive_from_child", data);
      }
    },
    components: {
      "li-container": LiContainer
    }
  };
</script>

<style scoped>
</style>