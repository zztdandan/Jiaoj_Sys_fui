<template>
  <div>
    <build-form @receive_from_form="LoginReturn" :FormArray="form_Array" :FormUrl="login_url" :ButtonArray="barray" FormId="Login_Form"></build-form>
  </div>
</template>

<script>
  import BuildForm from "components/buildForm_Light7/BuildForm";
  export default {
    name: "login-comp",
    data: function() {
      return {
        form_Array: [
          { type: "text", id: "phone_num", value: "", label: "电话号码" },
          { type: "password", id: "pwd", value: "", label: "密码" },
          //  { type: "picture-modal", id: "pic1", value: "", label: "图片1" },
          {
            type: "submit",
            id: "login_sub",
            value: "",
            label: "登陆",
            addon_class: "button-primary"
          },
          {
            type: "reset",
            id: "login_res",
            value: "",
            label: "取消",
            addon_class: "button-caution"
          }
        ],
        login_url: "/api/login",
        barray: [],
        FId: "aa"
      };
    },
    components: {
      "build-form": BuildForm
    },
    methods: {
      LoginReturn: function(data) {
        $.toast("登陆成功");
        History.go(-1);
      }
    }
  };
</script>

<style scoped>
</style>