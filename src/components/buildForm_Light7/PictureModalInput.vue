<template>
  <div>
    <input type="button" :value="button_value" class="button button-box button-small" style="width:50%;display:inline-block" @click="showmodal(this)" />
    <input type="text" v-model="url_value" :name="input_name" :id="input_id" style="display:none" />
    <p style="margin:8px;display:inline-block">{{suc_flag}}</p>
    <!-- <light7-modal button_text="上传图片完毕" @receive_from_child="modal_return" :info="this.modal_info" :default_show="modal_show">
    </light7-modal> -->
  </div>
</template>

<script>
  // import Ligth7_modal from 'components/Common_comp/Ligth7_modal';

  import light7 from '#static/light7/js/light7';
  light7.config = {
    autoInit: true,
    router: false
  };
  export default {
    name: 'picture-modal-input',
    props: ['params'],

    data: function() {
      return {
        button_value: '提交图片',
        url_value: '',
        input_id: 'id_' + this.params.id,
        input_name: this.params.id,
        suc_flag: '',
        modal_show: false
      };
    },
    computed: {},
    methods: {
      // modal_return: function(a) {
      //   console.log(a);
      // },
      showmodal: function() {
        //将新指针指向当前的this，因为这个this是vue对象，在后续的函数中this变化了就找不到这个vue对象了，所以先用一个变量指针先指向

        var that_vue = this;
        // this.modal_show=true;
        let newmodal = $.modal({
          title: this.params.label,
          text: '请提交如下图所示样板的图片',
          afterText:
            `<form class="upload_pic`+that_vue.input_name+`" enctype="multipart/form-data">
                        <img style="width:100%" src="` +
            //!测试方便用固定值代替
            // this.params["data-example-url"] +
            '/api/file_manager/load?id=k1' +
            `"/>
                <div class="button button-action button-rounded" style="text-align:center;width:100%">
                <p class="abs-p">点击提交图片</p>
                        <input type="file" class="img-modal-input" style="width:100%;opacity:0;" accept="image/jpg,image/jpeg,image/png" name="image"/>
                        </div>
                        </form>`,
          buttons: [
            {
              text: '返回提交'
            },
            {
              text: '提交图片',
              bold: true,
              onClick: function() {
                var formdata = new FormData($('.upload_pic'+that_vue.input_name)[0]);
                $.ajax({
                  type: 'post',
                  url: '/api/file_manager/uploadpic',
                  data: formdata,
                  contentType: false,
                  processData: false,
                  dataType: 'json',
                  success: function(res) {
                    if (res.flag) {
                      //上传成功
                      that_vue.suc_flag = '成功';
                      that_vue.url_value ='/api'+ res.data.path;
                    } else {
                      that_vue.suc_flag = '上传失败，原因：' + res.msg;
                    }
                  }
                });
              }
            }
          ]
        });
        //设置格式，否则看不到图片
        $(newmodal)
          .first('.modal.modal-in')
          .css('margin-top', '10px');
        $(newmodal)
          .first('.modal.modal-in')
          .css('top', '0px');
      }
    },
    components: {
      // 'light7-modal': Ligth7_modal
    }
  };

  //图片上传modal，有触发函数
</script>

<style>
input[type="file"].img-modal-input {
display: block;
width: 100%;
position: absolute;
left: 0px;
}
.abs-p{
  position: absolute;
text-align: center;
}

</style>