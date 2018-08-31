<template>
    <div>
        <el-table :data="this.tabledata" style="width: 100%">
            <el-table-column prop="REC_ID" label="申请ID">
            </el-table-column>
            <el-table-column prop="PROGRESS_NAME" label="申请名称" width="180">
            </el-table-column>
            <el-table-column prop="CREATOR_NAME" label="申请人姓名" width="180">
            </el-table-column>
            <el-table-column prop="LAST_TIME" label="申请人最后填表时间">
            </el-table-column>
            <el-table-column prop="CASE_NAME" label="业务名称">
            </el-table-column>
            <el-table-column prop="NODE_NAME" label="节点名称">
            </el-table-column>
            <el-table-column prop="CASE_NAME" label="业务名称">
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleClick(scope.row)" size="small">进行审批</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
      name: 'admin-veri-table',
      props: {
        tabledata: {
          type: Array,
          default: new Array()
        }
      },
      methods: {
        handleClick(rowdata) {
          console.log(rowdata);
          this.$router.push({name:"admin_do_veri",query:{progress_id:rowdata.REC_ID}});
        }
      }
    };
</script>

<style scoped>
</style>