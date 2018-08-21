<template>
    <div>
<build-form :FormArray="form_Array" :FormUrl="login_url" FormId="Login_Form" ></build-form>
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
            { type: "submit", id: "login_sub", value: "", label: "登陆" },
            { type: "reset", id: "login_res", value: "", label: "取消" }
          ],
          login_url:"/api/login"
        };
      },
      components: {
        "build-form": BuildForm
      }
    };
</script>

<style scoped>
</style>