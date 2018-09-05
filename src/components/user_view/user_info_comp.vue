<template>
    <div>
        <div class="content-block-title">用户信息</div>
        <div class="list-block media-list">
            <ul>
                <li>
                    <div class="item-content">
                        <div class="item-media"><img src="static/default_user.jpg" style='width: 4rem;'></div>
                        <div class="item-inner">
                            <div class="item-title-row">
                                <div class="item-title">{{user_info.FORIEGN_CNAME}}</div>
                            </div>
                            <div class="item-text">电话号码:{{user_info.FORIEGN_PHONENUM}}</div>
                        </div>
                        <slot name="addon_button"></slot>
                        <!-- <slot></slot> -->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'user-info-comp',
      props: {
        user_info: {
          type: Object,
          default: {}
        }
      }
    };
</script>

<style scoped>

</style>