<template>
    <input :name=" input_name" :id="input_id" type="text" v-model="input_value" style="display:none" />
</template>

<script>
    //隐藏按钮用于传输某些数据
    export default {
      name: "VisiInput",
      props: ["params"],
      template: "",
      data: function() {
        return {
          input_value: this.params.value,
          input_name: this.params.id,
          input_id: "id_" + this.params.id
        };
      }
    };
</script>

<style scoped>
</style>