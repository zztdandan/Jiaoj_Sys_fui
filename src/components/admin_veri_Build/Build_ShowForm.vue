<template>
    <el-form label-width="180px" size="medium ">

        <el-form-item label="节点名称">
            <el-input :value="this.status_obj.node_info.case_node_name" :readonly="true"></el-input>
        </el-form-item>
        <div v-for="item in status_obj.list" :key="item.id">
            <div :is="item.type+'-form-show'" :detail_info="item"></div>
        </div>
    </el-form>
</template>

<script>
    // props格式:{
    //             list: s_list,
    //             node_info: case_node_info
    //           }
    // item格式:{ "label": "节点ID", "type": "visi", "id": "case_node_id", "value": "2" }
    import image_form_show from './image_form_show';
    import text_form_show from './text_form_show';
    import visi_form_show from './visi_form_show';
    export default {
      name: 'build-show-form',
      props: {
        status_obj: {
          type: Object,
          default: new Object()
        }
      },
      components: {
        'text-form-show': text_form_show,
        'visi-form-show': visi_form_show,
        'image-form-show': image_form_show
      }
    };
</script>

<style scoped>
</style>