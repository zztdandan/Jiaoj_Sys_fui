
/* eslint-disable */
var header = Vue.component('simple-header', {
    props: {ti:String},
    template:
        '<header class="bar bar-nav">' +
        '<h1 class="title">{{tit}}</h1>' +
        '</header>',
    data: function () {
        return {
            tit:this.ti

        };
    }

});

var footer = Vue.component('simple-footer', {

    template:
        '<nav class="bar bar-tab">' +
        '<a class="tab-item active external" href="/">' +
        '<span class="icon iconfont icon-lianxifangshi"></span>' +
        '<span class="tab-label">首页</span>' +
        ' </a>' +

        '<a class="tab-item external" href="/user_view/my_case">' +
        '<span class="icon iconfont icon-shenqing"></span>' +
        '<span class="tab-label">我的申请</span>' +
        '</a>' +
        '<a class="tab-item external" href="/user_view/my_info">' +
        '<span class="icon iconfont icon-jiashizhenghuanzheng"></span>' +
        '<span class="tab-label">个人信息</span>' +
        '</a>' +
        '</nav>',
    data: function () {
        return {

        };
    }

});