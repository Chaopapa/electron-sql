import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import userStore from "../store/modules/user";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../pages/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next)=>{
  console.log(to,from);
  if(userStore.state.isLogin===false&&to.path!=='/login'){
    router.replace('/login');
  }else{
    next();
  }
})



export default router
