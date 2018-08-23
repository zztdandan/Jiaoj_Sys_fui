<template>
    <div class="card">
        <div class="card-header">{{this.title}}</div>
        <div class="card-content">
            <div class="card-content-inner">
                <slot></slot>
            </div>
        </div>
        <div v-if="this.has_foot" class="card-footer">
            <slot name="card_foot"></slot>
        </div>
    </div>
</template>

<script>
    export default {
      name: "card-common",
      props: {
        title: {
          type: String,
          default: "事件"
        },
        //是否拥有脚部
        has_foot: {
          type: Boolean,
          default: false
        }
      }
    };
</script>

<style scoped>
.card-header {
  background-color: #5377ad;
  color: white;
}
</style>