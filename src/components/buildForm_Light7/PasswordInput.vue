<template>

<input :name=" input_name" :id="input_id" type="password" placeholder="密码" v-model="input_value" />

</template>

<script>
//字符串形式

    export default {
        name:"PasswordInput",
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


