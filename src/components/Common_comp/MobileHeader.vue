<template>
  <header class="bar bar-nav">
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
    }
  };
</script>

<style scoped>
</style>