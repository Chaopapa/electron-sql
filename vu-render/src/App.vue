<template>
  <div id="app">
      <Header />
      <div class="main">
         <router-view />
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Header from "./components/header/Header.vue"
export default {
    components:{
      Header
    },
    beforeRouteEnter(to,from,next){
      console.log('组件内守卫');

      next(vm=>{
        console.log(vm.isLogin);
      })
    },
    computed:{
      ...mapState({
        isLogin: state=>state.user.isLogin
      })
    }
}
</script>
<style lang="scss">
  html,body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
  .main{
    position: absolute;
    width: 100%;
    top: 30px;
    bottom: 0;
    
  }
  body{
    -webkit-app-region:no-drag;
  }
</style>
