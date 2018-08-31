<template>

    <el-form-item :label="this.detail_info.label">
        <el-input :value="this.detail_info.value" :readonly="true"></el-input>
    </el-form-item>
</template>

<script>
//sample:{ "label": "节点ID", "type": "visi", "id": "case_node_id", "value": "2" }
    export default {
        name:'input-form-show',
        props: {
            detail_info: {
                type: Object,
                default: new Object()
            },
        },
    };
</script>

<style scoped>
</style>