//数字形式
<template>
        <input :name=" input_name" :id="input_id" type="number" :value="input_value" />
</template>
<script>
    export default {
      name:"NumberInput",
      props: ["params"],
      data: function() {
        return {
          input_value: "",
          input_name: this.params.id,
          input_id: "id_" + this.params.id
        };
      }
    };
</script>

<style scoped>
</style>
