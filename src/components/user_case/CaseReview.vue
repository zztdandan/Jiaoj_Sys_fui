<template>
    <!-- 根据输入的信息（由于是直接用路由加载，所以信息非常有限）获得当前项目情况及用户可以知道的信息，如果用户可以执行下一步则提供执行下一步的按钮-->
    <div>

    </div>
</template>

<script>
    export default {
      name: 'case-review',
      data: function() {
        return {
          progress_id: '',
          progress_info: {},
          progress_user: '',
          progress_next_node: {}
        };
      },
      created: function() {
        let that = this;
        let progress_id=this.$route.progress_id;
        this.$ajax.get('/api/user_view/case/case_progress?case_progress_id=')
      }
    };
</script>

<style scoped>
</style>