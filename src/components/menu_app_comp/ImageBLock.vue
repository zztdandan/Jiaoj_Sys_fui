<template>
  <div class="img-block">
    <!-- 暂时只显示第一张图，后续如果有可行的轮播插件再替换进来 -->
    <img :src="urls[0]">
  </div>
</template>

<script>
  export default {
    name: "ImageBlock",
    props: ["imgurl"],
    data: function() {
      return {
        urls: this.imgurl
      };
    }
  };
</script>

<style scoped>
img {

  width:100%;
  height: 100%;
}
.img-block{
    display:block;
    margin: -6px;
}
</style>


