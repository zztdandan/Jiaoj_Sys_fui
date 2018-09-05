<template>
  <div class="content-block">
    <user-info-comp :user_info="user_info">

    </user-info-comp>
    <div class="content-block-title">已申请业务:</div>
    <div class="list-block media-list">
      <ul>
        <li is="my-progress-card" v-for="progress in progress_list" v-bind:key="progress.REC_ID" :progress_info="progress">
          <!-- <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Facebook</div>
                <div class="item-after">17:14</div>
              </div>
              <div class="item-subtitle">子标题</div>
              <div class="item-text">此处是文本内容...</div>
            </div>
          </a> -->
        </li>
      </ul>
    </div>
    <!-- <my-progress-card ></my-progress-card> -->
  </div>
</template>

<script>
  import UserInfoComp from 'components/user_view/user_info_comp';
  import MyProgressCard from 'components/my_progress/my_progress_card';
  export default {
    name: 'my_progress',
    data: function() {
      return {
        ori_title: '',
        user_info: {},
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
      'my-progress-card': MyProgressCard,
      'user-info-comp': UserInfoComp
    }
  };
</script>

<style scoped>
</style>