<template>
    <div class="card">
        <div class="card-header"><slot name="header"></slot></div>
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
  background-color: #ffffff;
  color: #373737;
  padding: 2px 5px;
  min-height: 1.3rem;
  border-radius: .5rem;
      border-bottom: 0px solid #e1e1e1;
      font-size:.6rem;
}
.card-content-inner{
    padding: 0px;
}
.card{
    border-radius: .5rem;
    box-shadow: 0 0.3 0.3rem rgba(0, 0, 0, .4);

}
</style>