<template>
<input readonly="true" :name=" input_name" :id="input_id" type="text" v-model="input_value" />
</template>

<script>
//字符串形式

    export default {
        name:"readonly-input",
          props: ['params'],
  
    data: function () {
        return {
            input_value: this.params.value,
            input_name: this.params.id,
            input_id: 'id_' + this.params.id
        };
    }
    }
</script>

<style scoped>

</style>


