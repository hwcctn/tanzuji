<template>
  <div>
    <el-container>
      <el-header class="Header" >
        
        <el-row :gutter="20">
          <el-col :span="2" > <img src="https://th.bing.com/th?id=OSK.HIKUrRwv5StDEkr8KZQsmsqB3TkeRV85J0Vy7Z14blADino&w=90&h=90&c=7&o=6&dpr=1.6&pid=SANGAM" alt="" style="width: 100px;"><div class="grid-content ep-bg-purple" />
 </el-col>


    <el-col :span="6" ><div class="grid-content ep-bg-purple" />
   
    <h2 style="font-family:STXinwei">碳足迹</h2>
  </el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="2"><div class="grid-content ep-bg-purple" />
     
      <el-icon size="40px" ><User /></el-icon>
    
      <div >{{ this.idName }}</div>
    </el-col>

  </el-row>

      </el-header>
      <el-container>
        <el-aside width="200px"  class="Aside">
          <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
     
      background-color="#d4dedc"
      text-color="#000"
      active-text-color="#3a4a3f">
    <Nav/>
  </el-menu>
</el-aside>
    <el-main class="Main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
    components: { Nav }
}

</script>

<style lang='less' scoped>
h2{
  font-size: 35px;
}
.Header{
  background-color:#f2f6f5 ;
  height: 100px;
}
.Aside{
   background-color:#d4dedc ;
  height: 100vh;
 
}
.Main{
 background-color:#f4f4f5; 
}
.Aside .rmanager{
  font-size: 25px;
  margin: 20px;
}
.Aside .ruser{
  font-size: 25px;
  margin: 25px;
}
.el-icon {
    position: relative;
    top: 30px;
    left: 40px;
}
</style>
