<template>

    <!-- 首页 -->
    <div id="app">
        <!-- 页头页脚 -->
        <div id="vuecontent" class="page">
            <simple-header ti="柳州交警"></simple-header>
            <simple-footer></simple-footer>
            <div class="content">
                   <router-view></router-view>
            </div>
        </div>
    </div>


</template>

<script>
import MobileFooter from 'components/Common_comp/MobileFooter';
import MobileHeader from 'components/Common_comp/MobileHeader';


export default {
  name: 'app',
  components:{
   'simple-header':MobileHeader ,
   'simple-footer':MobileFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
