<template>
    <div>
        <p>管理员首页</p>
        <p>在测试系统中，管理员拥有所有项目的审核权限</p>
        <p>你有{{progress_todo.length}}个可审批的业务</p>
        <p>可点击左侧菜单进入审批页面</p>
    </div>
</template>

<script>
    export default {
      name: 'admin-homepage',
      data() {
        return {
          progress_todo: []
        };
      },
      created: function() {
        let that_vue = this;
        this.$ajax.get('/api/admin_view/veri/progress_todo_count').then(res => {
          if (res.data && res.data.flag) {
            that_vue.progress_todo = res.data.data;
          } else {
              console.log('/admin_view/veri/progress_todo_count出错',res);
          }
        });
      }
    };
</script>

<style scoped>
</style>