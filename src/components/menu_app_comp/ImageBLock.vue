<<template>
   <div>      
        <img :src="urls[0]" >      
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
  width: 100%;
}
</style>


