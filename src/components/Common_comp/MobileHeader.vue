<template>
  <header class="bar bar-nav">
     <button @click="goHome" class="button button-primary button-small pull-left">
    首页
  </button>
    <h1 class="title">{{tit}}</h1>
  </header>
</template>

<script>
  export default {
    name: "SimpleHeader",
    props: { ti: String },
    data: function() {
      return {};
    },
    computed: {
      tit: function() {
        return this.ti;
      }
    },
    methods: {
      goHome:function() {
        window.location="/";
      }
    },
  };
</script>

<style scoped>
</style>