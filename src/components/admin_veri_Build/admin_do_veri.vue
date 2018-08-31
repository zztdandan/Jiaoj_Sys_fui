<template>
  <el-row>
    <el-col class="buttom-5" :span="24">
      <p>业务名称:{{progress_info.PROGRESS_NAME}}</p>
      <p>业务最近表单情况:</p>
    </el-col>
    <el-col class="buttom-5" :span="24">
      <el-tabs value="status_card" type="border-card">
        <el-tab-pane label="业务现状" name="status_card">
          <build-show-form :status_obj="this.status_obj"></build-show-form>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col class="buttom-5" :span="24" v-if="this.history_list[0].name">
      <p class="buttom-5">业务历史审核记录:</p>
      <el-tabs :value="this.history_list[0].name.toString()" type="border-card">
        <el-tab-pane v-for="item in this.history_list" v-bind:key="item.name" :label="item.node_info.case_node_name" :name="item.name.toString()">
          <build-show-form :status_obj="item"></build-show-form>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="24" class="buttom-5">
      <p class="buttom-5">填写意见:</p>

      <el-form label-width="150px">
        <el-form-item label="审批意见" v-if="on_node_detail.has_advise">
          <el-input v-if="on_node_detail.has_advise" class="buttom-5" type="textarea" autosize placeholder="请输入内容" v-model="textarea_advise">
          </el-input>
        </el-form-item>
        <el-form-item v-for="item in on_node_detail.act_group" :key="item.name">
          <a :class="item.class" @click="veri_action(item.condition)" >{{item.label}}</a>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import Build_ShowForm from './Build_ShowForm';
  //管理员审批页面
  export default {
    name: 'admin-do-veri',
    data() {
      return {
        progress_id: '',
        progress_info: new Object(),
        forigen_user_info: new Object(),
        case_info: new Object(),
        ally_case_node_list: new Array(),
        textarea_advise: '',
        // 当前节点node（即描述审核节点）的详细信息（需要读取一些配置）
        on_node_detail: {}
      };
    },
    created: function() {
      let that_vue = this;
      that_vue.progress_id = that_vue.$route.query.progress_id;
      that_vue.$ajax.get('/api/admin_view/veri/progress_veri_amount?progress_id=' + that_vue.progress_id).then(res => {
        if (!res.data || !res.data.flag) {
          console.log('出现错误/api/admin_view/veri/progress_veri_amount?progress_id=', res);
          return;
        }
        that_vue.progress_info = res.data.data.progress;
        that_vue.case_info = res.data.data.case;
        that_vue.ally_case_node_list = res.data.data.node;
        that_vue.forigen_user_info = res.data.data.user;
        that_vue.on_node_detail = JSON.parse(that_vue.ally_case_node_list.where(x => x.rec_id == that_vue.progress_info.NODE_ID).first().node_detail);
      });
    },
    computed: {
      status_obj() {
        try {
          let content = JSON.parse(this.progress_info.CONTENT);
          let s_list = content.status;
          let case_id = s_list.where(x => x.id == 'case_node_id').first().value;
          let case_node_info = this.ally_case_node_list.where(x => x.rec_id.toString() == case_id).first();

          return {
            name: case_node_info.rec_id,
            list: s_list,
            node_info: case_node_info
          };
        } catch (e) {
          return {};
        }
      },

      history_list() {
        try {
          let a = new Array();
          let content = JSON.parse(this.progress_info.CONTENT);
          let h_list = content.history;
          h_list.forEach(ele => {
            let case_id = ele.where(x => x.id == 'case_node_id').first().value;
            let case_node_info = this.ally_case_node_list.where(x => x.rec_id.toString() == case_id).first();
            a.push({
              name: case_node_info.rec_id,
              list: ele,
              node_info: case_node_info
            });
          });
          return a;
        } catch (e) {
          return [
            {
              name: 1,
              list: [],
              node_info: { case_node_name: '1' }
            }
          ];
        }
      }
    },
    components: {
      'build-show-form': Build_ShowForm
    },
    methods: {
      veri_action(msg) {
        console.log(msg);
        let vue_that = this;
        var formdata = new FormData();
        formdata.append('case_node_id', vue_that.progress_info.NODE_ID);
        formdata.append('admin_id', 'admin');
        formdata.append('admin_name', 'admin');
        formdata.append('case_progress_id', vue_that.progress_info.REC_ID);
        formdata.append('veri_advise', vue_that.textarea_advise);
        formdata.append('condition',msg);
        this.$ajax({
          method: 'post',
          url: '/api/user_view/case/user_post_form',
          data: formdata
        }).then(function(res) {
          if (res.data && res.data.flag) {
            $.toast('信息提交成功');
            vue_that.$router.push({ name: 'case_review', query: { progress_id: vue_that.progress_info.REC_ID } });
          } else {
            console.log(res);
          }
        });
      }
    }
  };
</script>

<style scoped>
.buttom-5 {
  margin-bottom: 1rem;
}
</style>