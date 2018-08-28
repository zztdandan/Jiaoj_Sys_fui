<template>
    <div>
        <card-common :title="this.progress_info.PROGRESS_NAME" :has_foot="hasfoot">
            <p>该业务当前进度:</p>
            {{case_node_info.case_node_name}}
            <p v-if="curr_can_act">当前节点你可以进入操作</p>
            <p v-else>当前节点的操作人为审核者</p>
            <template slot="card_foot">
                <a v-if="curr_can_act" @click="do_ondo_click" class="button button-pill button-small">进行下一步</a>
                <a @click="check_casereview_click" class="button button-pill button-small">查看业务情况</a>
            </template>
        </card-common>
    </div>
</template>

<script>
import CardCommon from 'components/Common_comp/CardCommon';
export default {
  name: 'my-progress-card',
  props: {
    progress_info: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      hasfoot: true,
      case_node_info: {}
    };
  },
  computed: {
    curr_can_act: function() {
      return this.case_node_info.do_role == 'user';
    }
  },
  created() {
    var that = this;
    that.$ajax.get('/api/user_view/case/node_info?case_node_id=' + that.progress_info.NODE_ID).then(res => {
      if (!res.data || !res.data.flag) {
        console.log('出现错误/api/user_view/case/node_info?case_node_i', res);
        return;
      }
      that.case_node_info = res.data.data;
    });
  },
  methods: {
    //用户进行下一步操作的函数，与case_review里的函数等同
    do_ondo_click() {
      this.$router.push({ name: 'case_node', query: { node_id: this.case_node_info.rec_id, progress_id: this.progress_info.REC_ID } });
    },
    check_casereview_click(){
          this.$router.push({name:'case_review',query:{progress_id:this.progress_info.REC_ID}});
    }
  },
  components: {
    'card-common': CardCommon
  }
};
</script>

<style scoped>
</style>