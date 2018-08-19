<template>
    <div class="content">
        <form id="USER_FORM_SUBMIT" action="/user_view/case/user_form_submit" method="POST" enctype="multipart/form-data">
            <div class="list-block">
                <ul id='sub_form_list'>
                    <common-list v-bind:params="item" v-bind:key="item.id" v-for="item in itemss"></common-list>

                </ul>

            </div>
        </form>
    </div>
</template>

<script>
    import ListContainer from "./ListContainer.vue";
    export default {
      props: { items: Object },
      name: "UserSubmitFormComp",
      components: {
        "list-container": ListContainer
      },
      data: function() {
        return {
          itemss: this.items
        };
      }
    };
</script>

<style scoped>
</style>