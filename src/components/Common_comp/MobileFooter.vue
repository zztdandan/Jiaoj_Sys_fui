<template>
    <nav class="bar bar-tab">
        <a class="tab-item external" href="/">
            <span class="icon lzjiaoj-home"></span>
            <span class="tab-label">首页</span>
        </a>
        <a class="tab-item external" href="/user_view.html#/my_progress">
            <span class="icon lzjiaoj-profile"></span>
            <span class="tab-label">我的申请</span>
        </a>
        <a class="tab-item external" href="/user_view.html">
            <span class="icon lzjiaoj-user"></span>
            <span class="tab-label">个人信息</span>
        </a>
    </nav>
</template>

<script>
export default {
  name: 'SimpleFooter',
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.bar.bar-tab {
  background: #0a4b8b;

}
span{
      color: white;
}
</style>