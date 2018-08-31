<template>
  <div>
    请稍等，正在创建申请
  </div>
</template>

<script>
  import CaseNode from './CaseNode';
  export default {
    name: 'case-start',
    data: function() {
      return {
        //  node_info: {}
      };
    },
    created: function() {
      var that = this;
      // 读取caseid
      // console.log(1);
      // console.log(this.$route.query.caseid);
      let case_id = this.$route.query.caseid;
      //获得用户信息
      that.$ajax.get('/api/user_view/user_info').then(res => {
        if (!res.data || !res.data.flag) {
          console.log('出现错误/api/user_view/case/case_info?cas', res);
          $.toast('用户未登录');
          that.$router.push({ name: 'user_view' });
        } else {
          that.$ajax.get('/api/user_view/case_start/get_node?case_id=' + case_id).then(function(res) {
            if (res.data && res.data.flag) {
              //?测试用例，证明正确读取node信息，实际操作是直接router跳转到case_node，所以注释掉
              //   that.node_info = res.data.data;
              var v_node_id = res.data.data.rec_id;
              that.$router.push({ name: 'case_node', query: { node_id: v_node_id, progress_id: 'start' } });
            } else {
              $.toast('开始节点出错');
            }
          });
        }
      });
    }
  };
</script>

<style scoped>
</style>