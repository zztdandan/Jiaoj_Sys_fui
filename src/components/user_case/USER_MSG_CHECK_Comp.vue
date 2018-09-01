<template>
  <div>
    <p>用户:{{user_info_sign.FORIEGN_CNAME}}</p>
    <p>针对您流程的上一阶段审核已完成，以下是审核信息</p>
    <build-form @receive_from_form="LoginReturn" :FormArray="show_status" FormUrl="/" :ButtonArray="[]" FormId="status_form"></build-form>
    <p>点击下面按钮进入下一步</p>
    <button class="button button-action button-rounded" @click="btn_submit_sign_click">下一步</button>
  </div>
  </div>
</template>

<script>
import linqjs from 'linqjs';
import BuildForm from 'components/buildForm_Light7/BuildForm';
export default {
  name: 'user-msg-check',
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
      user_info_sign: this.user_info,
      progress_content: {},
      node_detail: {}
    };
  },
  created: function() {
    // if (typeof this.progress_info.CONTENT == 'undefined') {
    //   // this.$toast('出现错误');
    //   window.location = '/';
    // }
    //获得progress的详情
    if (typeof this.progress_info.CONTENT == 'string') {
      this.progress_content = JSON.parse(this.progress_info.CONTENT);
    } else {
      this.progress_content = this.progress_info.CONTENT;
    }
    //获得node_detail,从这里面可以得到具体要显示哪个节点的信息，
    //这个节点不一定是status,所以要从node_detail获得节点，从CONTENT.history获得详情(linqjs部署已经完成)
    if (typeof this.node_info.node_detail == 'string') {
      this.node_detail = JSON.parse(this.node_info.node_detail);
    } else {
      this.node_detail = this.node_info.node_detail;
    }
  },
  computed: {
    show_status() {
      //获得要显示的表单id
      let toshow_nodeid = this.node_detail.show_info_nodeid;
      //获得要显示的表单（从history)
      let s = this.progress_content.history
        .where(x => {
          let node_id = x.where(y => y.id == 'case_node_id').first().value;
          return node_id == toshow_nodeid;
        })
        .first();
      //将显示菜单的项改为只读
      s.where(x => x.type == 'text').forEach(ele => {
        ele.type = 'readonly';
      });
      return s;
    }
  },
  components: {
    'build-form': BuildForm
  },

  methods: {
    LoginReturn: function(a) {
      console.log(a);
    },
    //上传签名事件
    btn_submit_sign_click: function() {
      let vue_that = this;
      var formdata = new FormData();
      formdata.append('case_node_id', vue_that.node_info.rec_id);
      formdata.append('user_id', vue_that.user_info.REC_ID);
      formdata.append('user_name', vue_that.user_info.FORIEGN_CNAME);
      formdata.append('case_progress_id', vue_that.progress_info.REC_ID);
      formdata.append('checkmsg', '审核信息已确认');
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