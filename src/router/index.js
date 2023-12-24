import Login from '../components/Login.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  //主页面
  {
    path:'/',
    name:"Layout",
    component:()=>import("../views/Layout.vue"),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import("../views/Home.vue")
      },
      {
        path:'/myinfo',
        name:'myinfo',
        component:()=>import("../views/Myinfo.vue")
      },
      {
        path:'/course',
        name:'course',
        component:()=>import("../views/Course.vue")
      },
      {
        path:'/rankings',
        name:'rankings',
        component:()=>import("../views/Rankings.vue")
      }

    ]
  },
  //视频播放播放
  {
    path:"/player/:id/:courseName/:videoUrl",
    name:"Player",
    component:()=>import("../views/Player.vue")
   },
  //登录
  {
    path:"/login",
    name:"login",
    component:Login
  },
  //注册
  {
    path:"/register",
    name:"register",
    component:()=>import("../components/register.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  let token=localStorage.getItem("token")
  if(token||to.path==="/login"){
      next()
  }
  else{
  next("/login")
  }
})
export default router
