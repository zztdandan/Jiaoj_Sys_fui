<template>
    <div>
zzzzz
    </div>
</template>

<script>
    export default {
        name:"my_progress",
        data:function(){
            return{
                ori_title:"",
            }
        },
        created:function(){
            //设置下属状态栏的形态为“有”
            this.$store.commit('set_footer',true);
          this.ori_title=this.$store.state.menu_title;
             this.$store.commit('do_change_title',"我的申请");
        },
        beforeDestroy:function(){
            this.$store.commit('do_change_title',this.ori_title);
        }

    }
</script>

<style scoped>

</style>