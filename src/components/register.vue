
<template>
  <div id="main" style="font-family: 'Times New Roman', Times, serif;  font-size: 100px; color: rgb(130, 158, 150);">
       <p style="margin: 0 0;">碳足迹</p> 
        <div id="Form">
        <el-form
    ref="ruleFormRef"
    :model="restForm"
    status-icon
    size="100px"
    label-width="100px"
    class="demo-ruleForm"
  >
  <el-form-item label="用户名" prop="username">
      <el-input
        v-model="restForm.username"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input   v-model="restForm.pass" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item >
      <router-link exact to="/login">
      <el-button class="buttonDiv" type="primary" style=" width: 200%; margin: 10px auto;"
        >登录</el-button
      >
    </router-link>
      <el-button class="buttonDiv" type="primary" style="width: 30%; margin: 10px auto;"  @click="regist(restForm) "
        >注册</el-button
      >
   
    </el-form-item>
  </el-form>
        </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';

export default {
    data(){
        //定义初始值为0的变量，要使用ref方法赋值，直接赋值的话变量改变不会更新 UI
      return{
       restForm : {
            username:"",
            pass:"",
        }
      }
    },
 methods:{       
       regist(restForm){
         this.$api.postRegister({
          username:restForm.username,
          password:restForm.pass
})
  .then(res => {
    console.log(res)
    
    if(res.data.msg=="通过"){
      alert("注册成功")
      this.$router.push('/login');
    }

  })
           

}
}
}
</script>

<style lang='less' scoped>
.el-input__inner {
    --el-input-inner-height: 50px;
    font-size: 40px;
}
.el-input {
  --el-input-focus-border-color: #1c7544;
}
/*鼠标点击后移开，恢复本身样式*/
.buttonDiv, .buttonDiv:focus:not(.buttonDiv:hover){ 
    margin-right: 12px;
    border: 1px solid #214d0e;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 #f4f4f4;
    color: #2a851a;
    background: white;
}
/*鼠标悬浮，没有按下；鼠标按下后抬起，没有移开*/
.buttonDiv:focus, .buttonDiv:hover{
    background: #e7f4e7;
    border: 1px solid #072d0a !important;
    color: #256512;
}
/*鼠标按下，没有抬起*/
.buttonDiv:active {
    background: #0f4115;
    color: white;
}

</style>



    