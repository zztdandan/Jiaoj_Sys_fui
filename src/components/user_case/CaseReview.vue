<template>
  <!-- 根据输入的信息（由于是直接用路由加载，所以信息非常有限）获得当前项目情况及用户可以知道的信息，如果用户可以执行下一步则提供执行下一步的按钮-->
  <div>
    <p>用户:{{user_name}}</p>
    <p>您正在进行的业务是:{{case_name}}</p>
    <p>您的业务已经进行到:{{curr_node_cname}}</p>
    <div v-if="curr_not_end_node">
      <p>该业务的操作人是:{{curr_node_actor}}</p>
      <div v-if="curr_can_act">
        <p>您可以进行下一步操作，请点击下面按钮进行下一步操作</p>
        <button @click="btn_do_ondo_userclick" class="button button-action button-rounded">下一步</button>
      </div>
      <div v-else>
        <p>
          请等待管理员进行此步骤的操作
        </p>
      </div>
    </div>
    <div v-else>
      <p>该业务已经进行到最后一步</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'case-review',
    data: function() {
      return {
        progress_id: '',
        progress_info: {},
        progress_user_info: {},
        //业务当前应该做的节点详情
        progress_ondo_node: {},
        curr_case_info: {}
      };
    },
    created: function() {
      let that = this;
      let progress_id_tmp = this.$route.query.progress_id;
      this.progress_id = progress_id_tmp;
      //填充Progress信息
      this.$ajax.get('/api/user_view/case/case_progress?case_progress_id=' + progress_id_tmp).then(function(res) {
        if (!res.data || !res.data.flag) {
          console.log('出现错误', res);
          return;
        }
        that.progress_info = res.data.data;
        let case_id = that.progress_info.CASE_ID;
        let case_node_id = that.progress_info.NODE_ID;
        //填充node信息
        that.$ajax.get('/api/user_view/case/node_info?case_node_id=' + case_node_id).then(res => {
          if (!res.data || !res.data.flag) {
            console.log('出现错误/api/user_view/case/node_info?case_node_i', res);
            return;
          }
          that.progress_ondo_node = res.data.data;
        });
        //填充case信息
        that.$ajax.get('/api/user_view/case/case_info?case_id=' + case_id).then(res => {
          if (!res.data || !res.data.flag) {
            console.log('出现错误/api/user_view/case/case_info?cas', res);
            return;
          }
          that.curr_case_info = res.data.data;
        });
        //获得用户信息
        that.$ajax.get('/api/user_view/user_info').then(res => {
          if (!res.data || !res.data.flag) {
            console.log('出现错误/api/user_view/case/case_info?cas', res);
            return;
          }
          that.progress_user_info = res.data.data;
        });
      });
    },
    computed: {
      user_name: function() {
        return this.progress_user_info.FORIEGN_CNAME;
      },
      case_name: function() {
        return this.curr_case_info.CASE_NAME;
      },
      curr_node_cname: function() {
        return this.progress_ondo_node.case_node_name;
      },
      //! 这里程序设计有问题，应该直接回传操作人而不是代号。code_review时建议修改
      curr_can_act: function() {
        return this.progress_ondo_node.do_role == 'user';
      },
      curr_node_actor: function() {
        return this.progress_ondo_node.do_role == 'user' ? '市民用户' : '管理员';
      },
      //?该节点不是结束节点的话进行下一步提示，否则提示业务结束
      curr_not_end_node: function() {
        return this.progress_ondo_node.node_cate != 'end';
      }
    },
    methods:{
      btn_do_ondo_userclick:function(e){
        this.$router.push({name:"case_node",query:{node_id:this.progress_ondo_node.rec_id,progress_id:this.progress_info.REC_ID}});
      }
    }
  };
</script>

<style scoped>
</style>