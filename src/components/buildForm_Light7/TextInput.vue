<template>

<input :name=" input_name" :id="input_id" type="text" v-model="input_value" />

</template>

<script>
//字符串形式

    export default {
        name:"TextInput",
          props: ['params'],
  
    data: function () {
        return {
            input_value: '',
            input_name: this.params.id,
            input_id: 'id_' + this.params.id
        };
    }
    }
</script>

<style scoped>

</style>


