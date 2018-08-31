<template>
    <el-row>
        <el-col :span="24">

            <p class="sub-title">待审核业务筛选</p>
        </el-col>
        <el-col :span="24">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="业务名称">
                    <el-select clearable v-model="formInline.case" filterable placeholder="业务名称输入">
                        <el-option v-for="item in this.case_list" :key="item.REC_ID" :label="item.CASE_NAME" :value="item.REC_ID">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="审核节点">
                    <el-select clearable v-model="formInline.node" filterable placeholder="待审核节点">
                        <el-option v-for="item in this.node_list" :key="item.rec_id" :label="item.case_node_name" :value="item.rec_id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="DoSearch">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import linqjs from 'linqjs';
    export default {
      name: 'admin-veri-searchbar',
      props: {
        progress_list: {
          type: Array,
          default: new Array()
        },
        case_list: {
          type: Array,
          default: new Array()
        },
        node_list: {
          type: Array,
          default: new Array()
        }
      },
      data() {
        return {
          SearchInputCase: '',
          SearchInputNode: '',
          formInline: {
            case: '',
            node: ''
          }
        };
      },
      computed: {},
      methods: {
        DoSearch() {
            let that_vue=this;
          let progress_list_ret = this.progress_list.where(x => {
            return x.NODE_ID.toString().includes(that_vue.formInline.node) && x.CASE_ID.toString().includes(that_vue.formInline.case);
          });

          this.$emit('SearchReturn', progress_list_ret);
        }
      }
    };
</script>

<style scoped>
</style>