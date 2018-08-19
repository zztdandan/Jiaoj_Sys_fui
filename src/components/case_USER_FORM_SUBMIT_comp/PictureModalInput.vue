<template>
    <div>
        <input type="button" :value="button_value" class="button button-action button-rounded" style="margin:8px;display:inline-block" @click="showmodal(this)" />
        <input type="text" v-model="url_value" :name="input_name" :id="input_id" style="display:none" />
        <p style="margin:8px;display:inline-block">{{suc_flag}}</p>
    </div>
</template>

<script>
    export default {
      name: "PictureModalInput",
      props: ["params"],

      data: function() {
        return {
          button_value: "提交图片",
          url_value: "",
          input_id: "id_" + this.params.id,
          input_name: this.params.id,
          suc_flag: ""
        };
      },
      methods: {
        showmodal: function() {
          //将新指针指向当前的this，因为这个this是vue对象，在后续的函数中this变化了就找不到这个vue对象了，所以先用一个变量指针先指向

          var that_vue = this;
          let newmodal = $.modal({
            title: this.params.label,
            text: "请提交如下图所示样板的图片",
            afterText:
              '<form class="upload_pic" enctype="multipart/form-data">' +
              '<img style="width:100%" src="' +
              this.params["data-example-url"] +
              '"/>' +
              '<input type="file" class="button button-action button-rounded" style="width:50%" name="image"/>' +
              "</form>",
            buttons: [
              {
                text: "返回提交"
              },
              {
                text: "提交图片",
                bold: true,
                onClick: function() {
                  var formdata = new FormData($(".upload_pic")[0]);
                  $.ajax({
                    type: "post",
                    url: "/file_manager/uploadpic",
                    data: formdata,
                    contentType: false,
                    processData: false,
                    dataType: "json",
                    success: function(data) {
                      if (typeof data.path != "undefined") {
                        //上传成功
                        that_vue.suc_flag = "成功";
                        that_vue.url_value = data.path;
                      }
                    }
                  });
                }
              }
            ]
          });
          //设置格式，否则看不到图片
          $(newmodal)
            .first(".modal.modal-in")
            .css("margin-top", "10px");
          $(newmodal)
            .first(".modal.modal-in")
            .css("top", "0px");
        }
      }
    };

    //图片上传modal，有触发函数
</script>

<style scoped>
</style>