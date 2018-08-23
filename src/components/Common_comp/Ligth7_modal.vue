<template>
    <!-- 只实现简单无事件modal -->
    <div>
        <div class="modal modal-in" style="display: block;top:0px">
            <div class="modal-inner">
                <div class="modal-title">
                    <slot name="title"></slot>
                </div>
                <div class="modal-text">
                    <slot></slot>
                </div>
            </div>
            <div class="modal-buttons">
                <span class="modal-button modal-button-bold" @click="button_click">{{this.button_text}}</span>
            </div>
        </div>
        <div class="modal-overlay modal-overlay-visible"></div>
    </div>
</template>

<script>
    // import moduleName from "#static/light7/js/light7";
    export default {
      name: "light7-modal",
      props: {
        button_text: {
          type: String,
          default: "确认"
        }
      },
      mounted: function() {
        var s = parseFloat($(".modal-overlay").css("height"));
        var sk = parseFloat($("form").css("height"));
        $(".modal-overlay").css("height",sk*1.2);
        $(".modal-text").css("height", s * 0.65);
        $(".modal-text").css("overflow", "overlay");
      },
      methods: {
        button_click: function() {
             $(".modal-overlay-visible").removeClass('modal-overlay-visible');
             $(".modal-in").removeClass('modal-in');
             this.$emit("receive_from_child");
        }
      }
    };
</script>

<style scoped>
.modal.modal-in {
  top: 1%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.model-text {
  overflow: overlay;
}
</style>