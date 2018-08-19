<template>
    <input type="submit" :value="button_value" class="button button-raised button-primary button-pill" />
</template>

<script>
    export default {
      name: "SubmitInput",
      props: ["params"],

      data: function() {
        return {
          button_value: this.params.value
        };
      }
    };

    //上传按钮
</script>

<style scoped>
</style>