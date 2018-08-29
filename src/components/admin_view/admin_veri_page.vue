<template>
    <div>
        <!-- 一个搜索框，一个表格 -->
        <el-row>
            <el-col :span="24">
                输入搜索条件可按需搜索可审核项
            </el-col>

            <el-col :span="6">
                <p class="inline">业务名称 ：</p>
                <el-autocomplete class="inline" v-model="SearchInputCase" :fetch-suggestions="CasequerySearch" placeholder="业务名称输入">

                </el-autocomplete>
            </el-col>
            <el-col :span="6">
                <p class="inline">审核节点 ：</p>
                <el-autocomplete class="inline" v-model="SearchInputNode" :fetch-suggestions="NodequerySearch" placeholder="审核节点输入"></el-autocomplete>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import linqjs from 'linqjs';
    export default {
      name: 'admin-veri-page',
      data: function() {
        return {
          progress_todo_list: new Array(),
          progress_ally_case: new Array(),
          progress_ally_node: new Array(),
          SearchInputCase: '',
          SearchInputNode:''
        };
      },
      created: function() {
        this.progress_ally_case = [{ CASE_NAME: '测试1' }, { CASE_NAME: '测试2' }, { CASE_NAME: '测试3' }, { CASE_NAME: '结果4' }];
      },
      computed: {
        //按case分类的progress列表
        progress_split_by_case: function() {
          return {};
        },
        case_for_select_array: function() {
          return this.progress_ally_case.select(x => {
            return { value: x.CASE_NAME };
          });
        },
        SearchSelectedCase: function() {
          return this.progress_ally_case.where(x => x.CASE_NAME === this.SearchInputCase).first();
        }
      },

      methods: {
        //输入框返回函数
        CasequerySearch(queryString, cb) {
          let that_vue = this;
          let ret_arr = that_vue.case_for_select_array.where(x => {
            return x.value.includes(queryString);
          });
          cb(ret_arr);
        },
        NodequerySearch(queryString, cb)
        {}
      }
    };
</script>

<style scoped>
.inline {
  display: inline-block;
}
</style>