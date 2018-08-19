<template>
    <div class="row">
        <div v-for="case_item in case_index" v-bind:key="case_item.REC_ID" class="col-xs-3">
            <case-item :itemdetail="case_item">
            </case-item>
        </div>
    </div>
</template>

<script>
    export default {
      props: ["menuindex"],
      data: function() {
        return {
          case_index: this.menuindex
        };
      },

      components: {
        "case-item": CaseItem
      }
    };
</script>

<style scoped>
</style>

