<template>
  <div>
    <p>这是用户电子签名页面，这个页面还没有做，点击按钮视为完成操作，进入下一步</p>
    <button class="button button-action button-rounded" @click="btn_submit_sign_click">下一步</button>
  </div>
</template>

<script>
  export default {
    name: 'user-sign',
    props: {
      node_info: {
        type: Object,
        default: {}
      },
      progress_info: {
        type: Object,
        default: {}
      },
      is_start: {
        type: Boolean,
        default: false
      },
      user_info: {
        type: Object,
        default: {}
      }
    },
    data: function() {
      return {
        user_info_sign: this.user_info
      };
    },
    created: function() {},
    methods: {
      //上传签名事件
      btn_submit_sign_click: function() {
        let vue_that = this;
        var formdata = new FormData();
        formdata.append('case_node_id', vue_that.node_info.rec_id);
        formdata.append('user_id', vue_that.user_info_sign.REC_ID);
        formdata.append('sign_url', '/api/file_manager/load?id=0sample1');
        this.$ajax({
          method: 'post',
          url: '/api/user_view/case/user_sign_up',
          data: formdata
        }).then(function(res) {
          console.log(res);
        });
      }
    }
  };
</script>

<style scoped>
</style>