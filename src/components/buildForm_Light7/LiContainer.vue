

<template>
  <!-- 这个控件表示从li这一级别开始构建 -->
  <li class="item-content" v-if="visi">

    <div class="item-inner">
      <div class="item-title label">{{list_label}}</div>
      <div class="item-input">
        <input :is="component" :params="params" />
      </div>
    </div>

  </li>
  <li v-else style="display:none">
    <input :is="component" :params="params" />
  </li>
</template>
<script>
import path from 'path';
import NumberInput from './NumberInput.vue';
import PictureModalInput from './PictureModalInput.vue';
import SubmitInput from './SubmitInput.vue';
import TextInput from './TextInput.vue';
import VisiInput from './VisiInput.vue';
import PasswordInput from './PasswordInput.vue';
import ReadonlyInput from './ReadonlyInput.vue';
export default {
  name: 'list-container',
  props: ['params'],
  components: {
    'text-input': TextInput,
    'number-input': NumberInput,
    'submit-input': SubmitInput,
    'reset-input': SubmitInput,
    'picture-modal-input': PictureModalInput,
    'visi-input': VisiInput,
    'password-input': PasswordInput,
    'readonly-input': ReadonlyInput
  },
  data: function() {
    var component_id = this.params.type + '-input';
    return {
      list_label: this.params.label,
      component: component_id,
      visi: this.params.type != 'visi'
    };
  }
};
</script>
<style scoped>
input[type='button'].button {
  width: auto;
}
</style>





