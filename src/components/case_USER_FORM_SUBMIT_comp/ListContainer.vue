

<template>
    <!-- 里面会包含一个input,具体由:is 指定 -->
    <div id="listcon">
        <li v-if="visi">
            <div class="item-inner">
                <div class="item-title label">{{list_label}}</div>
                <div class="item-input">
                    <input :is="component" :params="params" />
                </div>
            </div>
        </li>
        <li v-else style="display:none">
            <input-container :params="cildparams">
            </input-container>
        </li>
    </div>

</template>
<script>
    import path from "path";
    import NumberInput from "./NumberInput.vue";
    import PictureModalInput from "./PictureModalInput.vue";
    import SubmitInput from "./SubmitInpute.vue";
    import TextInput from "./TextInput.vue";
    import VisiInput from "./VisiInput.vue";
    export default {
      name: "list-container",
      props: ["params"],
      components: {
        "text-input": TextInput,
        "number-input": NumberInput,
        "submit-input": SubmitInput,
        "picture-modal-input": PictureModalInput,
        "visi-input": VisiInput
      },
      data: function() {
        var component_id = this.params.type + "-input";
        return {
          list_label: this.params.label,
          component: component_id
        };
      }
    };
</script>
<style scoped>
        input[type=button].button {
            width: auto;
        }
</style>





