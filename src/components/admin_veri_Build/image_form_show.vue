<template>

    <el-form-item :label="this.detail_info.label">
        <el-col :span="8">
            <div v-if="this.has_img">
                <img class="form-img" :src="this.detail_info.value" />
            </div>
            <div v-else>
                <p>图片缺失</p>
            </div>
        </el-col>
    </el-form-item>
</template>

<script>
    //sample:{ "label": "节点ID", "type": "visi", "id": "case_node_id", "value": "2" }
    export default {
      name: 'image-form-show',
      props: {
        detail_info: {
          type: Object,
          default: new Object()
        }
      },
      computed: {
        has_img() {
          return this.detail_info.value!="";
        }
      }
    };
</script>

<style scoped>
.form-img {
  width: 100%;
  max-width: 200px;
}
</style>