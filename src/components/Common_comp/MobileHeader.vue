<template>
  <div>
    <header class="bar bar-nav header-farther">
      <div @click="goBack" style="" class="pad-left fate-button">
        <span class="lzjiaoj-circle-left"></span>
      </div>
      <h1 class="title bar-inline-60">
        <slot></slot>
      </h1>
      <div @click="goHome" style="" class="pad-right fate-button">
        <span class="lzjiaoj-home"></span>
      </div>

    </header>

  </div>
</template>
 
<script>
export default {
  name: 'SimpleHeader',

  data: function() {
    return {};
  },
  computed: {},
  methods: {
    goHome: function() {
      window.location = '/';
    },
    goBack:function(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
header {
}
.title {
  color: white;
  position: absolute;
}
.bar {
  background-color: #0a4b8b;
  border-bottom: 0px solid #e7e7e7;
}
.header-farther {
  padding: 0%;
}
.bar-inline-60 {
  display: block;
  width: 60%;
  margin-left: 20%;
  margin-right: auto;
}
.pad-left {
  display: block;
  width: 18%;
  float: left;
  padding-left: 2%;
}
.pad-right {
  padding-right: 2%;
  display: block;
  width: 18%;
  float: right;
}
.fate-button {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 2.6rem;
  z-index: 20;
  margin-top: 0;
  font-weight: 400;
  color: #e7e7e7;
}
</style>