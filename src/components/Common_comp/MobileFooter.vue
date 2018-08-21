<template>
    <nav class="bar bar-tab">
        <a class="tab-item external" href="/">
            <span class="icon iconfont icon-lianxifangshi"></span>
            <span class="tab-label">首页</span>
        </a>

        <a class="tab-item external" href="/user_view.html#/my_progress">
            <span class="icon iconfont icon-shenqing"></span>
            <span class="tab-label">我的申请</span>
        </a>
        <a class="tab-item external" href="/user_view.html">
            <span class="icon iconfont icon-jiashizhenghuanzheng"></span>
            <span class="tab-label">个人信息</span>
        </a>
    </nav>
</template>

<script>
    export default {
      name: "SimpleFooter",
      data: function() {
        return {};
      }
    };
</script>

<style scoped>
</style>