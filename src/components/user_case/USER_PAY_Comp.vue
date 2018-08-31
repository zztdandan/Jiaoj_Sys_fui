<template>
  <div>
    <p>这是用户支付页面，这个页面还没有做，点击按钮视为完成操作，进入下一步</p>
    <button class="button  button-primary button-rounded" @click="btn_submit_sign_click">下一步</button>
  </div>
</template>

<script>
  export default {
    name: 'user-pay',
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
    created: function() {
    },
    methods: {
      //上传签名事件
      btn_submit_sign_click: function() {
        let vue_that = this;
        var formdata = new FormData();
        //必要提交字串
        formdata.append('case_node_id', vue_that.node_info.rec_id);
        formdata.append('user_id', vue_that.user_info.REC_ID);
        formdata.append('user_name', vue_that.user_info.FORIEGN_CNAME);
        formdata.append('case_progress_id', vue_that.progress_info.REC_ID);
        formdata.append('payback', '测试级字串，无实际意义');
        this.$ajax({
          method: 'post',
          url: '/api/user_view/case/user_post_form',
          data: formdata
        }).then(function(res) {
          if (res.data && res.data.flag) {
            $.toast('信息提交成功');
            vue_that.$router.push({ name: 'case_review', query: { progress_id: vue_that.progress_info.REC_ID } });
          } else {
            console.log(res);
          }
        });
      }
    }
  };
</script>

<style scoped>
</style>