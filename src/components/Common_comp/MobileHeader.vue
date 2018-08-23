<template>
  <header class="bar bar-nav">
    <button @click="goHome" class="button button-primary button-small pull-left">
      回到首页
    </button>
    <h1 class="title"><slot></slot></h1>
  </header>
</template>

<script>
  export default {
    name: "SimpleHeader",
   
    data: function() {
      return {};
    },
    computed: {
     
    },
    methods: {
      goHome: function() {
        window.location = "/";
      }
    }
  };
</script>

<style scoped>
</style>