<template>
  <!-- <div class="top-nav">
    <li><router-link exct to="/home">首页 </router-link></li>
    <li> <router-link to="/course">课程</router-link></li>
    <li> <router-link to="/myinfo"> 个人信息</router-link></li>
    <li> <router-link to="/rankings" >排行榜</router-link></li>
  </div> -->
  <div><router-link exact to="/home">
            <el-menu-item index="1">
        <i class="el-icon-menu"></i>
          <span>首页</span>
      </el-menu-item>
          
          </router-link></div>
          
          <div><router-link exact to="/course">
            <el-menu-item index="2">
        <i class="el-icon-menu"></i>
          <span>课程</span>
        </el-menu-item>
           
          </router-link></div>
          <div><router-link exact to="/myinfo">
            <el-menu-item index="3">
        <i class="el-icon-menu"></i>
          <span>个人信息</span>
        </el-menu-item>
      </router-link></div>
          
</template>

<script>
import router from '@/router';

export default {
    components: { router }
}

</script>

<style  scoped>
.top-nav{
  display:flex;
  background:#fff;

  li{
      flex:1;
      text-align: center;
      padding-top:10px;
      a{
      display:block;
      padding-top:10px
      }
      .active{
          border-bottom:5px solid #ff0000;
      }
  }
  
}
</style>
