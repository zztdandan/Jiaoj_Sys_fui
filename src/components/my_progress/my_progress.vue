<template>
    <div class="content-block">
     <p>您的用户名是:{{this.user_info.FORIEGN_CNAME}}</p>
     <p>以下是您的业务:</p>
<my-progress-card v-for="progress in progress_list" v-bind:key="progress.REC_ID" :progress_info="progress"></my-progress-card>
    </div>
</template>

<script>
import MyProgressCard from 'components/my_progress/my_progress_card';
    export default {
      name: 'my_progress',
      data: function() {
        return {
          ori_title: '',
          user_info:{},
          progress_list: []
        };
      },
      created: function() {
        let that_vue = this;
        this.$store.commit('set_footer', true);
        this.ori_title = this.$store.state.menu_title;
        this.$store.commit('do_change_title', '我的申请');
        this.$store.commit('check_user_info');
        let do_findprogress = function(user_info) {
          return new Promise(function(resolve, reject) {
            that_vue.$ajax.get('/api/user_view/case/case_progress_by_user?user_id=' + user_info.REC_ID).then(res => {
              if (res.data && typeof res.data.flag != 'undefined') {
                resolve(res.data.data);
              } else {
                that_vue.Err.DoLog(res);
              }
            });
          });
        };

        if (typeof this.$store.state.user_info_ex.flag == 'undefined') {
          that_vue.$ajax.get('/api/user_view/user_info').then(res => {
            if (res.data && typeof res.data.flag != 'undefined') {
              that_vue.user_info = res.data.data;
              do_findprogress(that_vue.user_info).then(res => {
                that_vue.progress_list = res;
              });
            } else {
              that_vue.Err.DoLog(res);
            }
          });
        } else {
          that_vue.user_info = that_vue.$store.state.user_info_ex.data;
          do_findprogress(that_vue.user_info).then(res => {
            that_vue.progress_list = res;
          });
        }

        //设置下属状态栏的形态为“有”
      },
      beforeDestroy: function() {
        this.$store.commit('do_change_title', this.ori_title);
      },
      components: {
    'my-progress-card': MyProgressCard
  }
    };
</script>

<style scoped>
</style>