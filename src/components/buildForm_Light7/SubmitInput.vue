<template>
  <!--submit，reset都属于这个控件，在父控件licontainer里面传值进来 -->
  <input style="width:100%" :type="button_type" :value="button_value" :class="button_class" />
</template>

<script>
  export default {
    name: "SubmitInput",
    props: ["params"],
    data: function() {
      return {
        button_value: this.params.value,
        button_type: this.params.type,
        button_class: "button button-raised button-pill"
      };
    },
    mounted: function() {
      // 改变控件的颜色
      if (typeof this.params.addon_class != undefined) {
        this.button_class = this.button_class + " " + this.params.addon_class;
      }
    }
  };

  //上传按钮
</script>

<style scoped>
</style>