<template>
    <!-- 只实现简单无事件modal -->
    <div :id="this.info.id" :style="isshowblock">
        <div class="modal modal-in" style="display:block;top:3%">
            <div class="modal-inner">
                <div class="modal-title">
                    {{this.info.title}}
                </div>
                <div class="modal-text">
                    <div v-html="this.info.text"></div>
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
      name: 'light7-modal',
      props: {
        button_text: {
          type: String,
          default: '确认'
        },

        info: {
          type: Object,
          default: {}
        },
        //默认创建时是否即时显示
        default_show: {
          type: Boolean,
          default: false
        }
      },
      data: function() {
        return {
          now_show: this.default_show,
          isshowblock:this.default_show ? 'display:block' : 'display:none'
        };
      },
      mounted: function() {
        //   if(this.show){
        //        $("#"+this.info.id).css("display","block");
        //   }
        //   else{
        //        $("#"+this.info.id).css("display","none");
        //   }
        var s = parseFloat($('.modal-overlay').css('height'));
        var sk = parseFloat($('form').css('height'));
        if (!sk) {
          sk = s;
        }
        // $('.modal-overlay').css('height', sk * 1.1);
        $('.modal-text').css('height', sk * 0.7);
        $('.modal-text').css('overflow', 'overlay');
      },
      watch: {
          default_show(newValue, oldValue) {
              this.now_show=newValue;
          }
      },
      computed: {
       
      },
      methods: {
        button_click: function() {
          //  $(".modal-overlay-visible").removeClass('modal-overlay-visible').css("display","none");
          //  $(".modal-in").removeClass('modal-in').css("display","none");
          $.closeModal();
          this.$emit('receive_from_child');
        }
      }
    };
</script>

<style>
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