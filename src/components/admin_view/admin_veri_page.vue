<template>
  <div>
    <!-- 一个搜索框，一个表格 -->

    <admin-veri-searchbar @SearchReturn="searchListReturn" :progress_list="progress_todo_list" :case_list="progress_ally_case" :node_list="progress_ally_node"></admin-veri-searchbar>
    <admin-veri-table :tabledata="progress_tabledata"></admin-veri-table>
  </div>
</template>

<script>
  import AdminVeriSearchbar from './admin_veri_searchBar';
  import AdminVeriTable from './admin_veri_table';
  import moment from 'moment';
  export default {
    name: 'admin-veri-page',
    data: function() {
      return {
        //所有待审核事项列表合集
        progress_todo_list: new Array(),
        //所有
        progress_ally_case: new Array(),
        progress_ally_node: new Array(),
        progress_ally_user: new Array(),
        SearchInputCase: '',
        SearchInputNode: '',
        progress_fortable: new Array(),
        progress_tabledata: new Array()
      };
    },
    created: function() {
      let that_vue = this;
      this.$ajax.get('/api/admin_view/veri/progress_todo_amount').then(function(res) {
        if (!res.data || !res.data.flag) {
          console.log('出现错误', res);
          return;
        }
        that_vue.progress_todo_list = res.data.data.progress;
        that_vue.progress_ally_case = res.data.data.case;
        that_vue.progress_ally_node = res.data.data.node;
        that_vue.progress_ally_user = res.data.data.user;
      });
    },
    computed: {
      //按case分类的progress列表
      progress_split_by_case: function() {
        return {};
      }
    },

    methods: {
      searchListReturn: function(data) {
        console.log(data);
        this.progress_fortable = data;
        this.progress_tabledata = this.$options.methods.reCalctabledata(this);
      },
      reCalctabledata: function(that_vue) {
        let a = new Array();
        that_vue.progress_fortable.forEach(element => {
          let b = new Object();
          b.PROGRESS_NAME = element.PROGRESS_NAME;
          b.CREATOR_NAME = that_vue.progress_ally_user.where(x => x.REC_ID.toString() == element.PROGRESS_CREATOR).first().FORIEGN_CNAME;
          b.LAST_TIME = moment(element.LAST_TIME, 'YYYYMMDDhhmmss').format('YYYY-MM-DD hh:mm:ss');
          b.CASE_NAME = that_vue.progress_ally_case.where(x => x.REC_ID == element.CASE_ID).first().CASE_NAME;
          b.NODE_NAME = that_vue.progress_ally_node.where(x => x.rec_id == element.NODE_ID).first().case_node_name;
          b.REC_ID=element.REC_ID;
          a.push(b);
        });
        return a;
      }
    },
    components: {
      'admin-veri-searchbar': AdminVeriSearchbar,
      'admin-veri-table': AdminVeriTable
    }
  };
</script>

<style scoped>
.inline {
  display: inline-block;
}
</style>