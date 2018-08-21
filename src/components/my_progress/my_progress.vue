<template>
    <div>
zzzzz
    </div>
</template>

<script>
    export default {
        name:"my_progress",
        created:function(){
            //设置下属状态栏的形态为“有”
            this.$store.commit('set_footer',true);
            
             this.$store.commit('set_title',"我的申请");
        }
    }
</script>

<style scoped>

</style>