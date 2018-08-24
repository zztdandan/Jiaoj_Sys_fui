<template>
  <!-- 创造表单的基控件，输入array后返回一个表单 -->
  <form :id="FormId" :action="FormUrl" :method="FormAction" enctype="multipart/form-data">
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
  import jqueryform from '#static/js/jquery.form';
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
      FormId:{type: String, default: "FubForm"}
    },
    data() {
      return {};
    },
    computed: {},
    mounted: function() {
      // console.log(1);
      // console.log($("#" + this.FormId));
      var that=this;
      $("#" + this.FormId).ajaxForm(data=> {
        // console.log('yyyyy',that);
        if (typeof data.flag =="undefined") {
          $.alert("出现严重错误");
        }
        if (data.flag) {
          console.log(data);
          // 这个是成功的
          this.$options.methods.send_to_parent.call(that,data);
        } else {
          $.toast("格式错误，发生失败");
        }
      });
    },
    methods: {
      submit: function() {
        console.log("进入打印",this);
      },

      send_to_parent: function(data){
        //  console.log("log22",that);
          console.log("lo33",this);
        // console.log(that.$emit);
        this.$emit("receive_from_form", data);
      }
    },
    components: {
      "li-container": LiContainer
    }
  };
</script>

<style scoped>
</style>