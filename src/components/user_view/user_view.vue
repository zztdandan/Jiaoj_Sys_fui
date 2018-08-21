<template>
    <div>
        <a v-on:click="change">跳转</a>
    </div>
</template>

<script>
    export default {
      name: "user_view",
      created: function() {
        //设置下属状态栏的形态为“有”
        this.$store.commit("set_footer", true);
        this.$store.commit("set_title", "用户信息");
      },
      methods: {
        change: function() {
          alert(1);
        }
      }
    };
</script>

<style scoped>
</style>