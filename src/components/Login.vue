<template>
  <div id="main" style="font-family: 'Times New Roman', Times, serif;  font-size: 100px; color: rgb(130, 158, 150);">
       <p style="margin: 0 0;">碳足迹</p> 
        <div id="Form">
        <el-form
    ref="ruleFormRef"
    :model="LoginForm"
    status-icon
    size="large"
    label-width="100px"
    class="demo-ruleForm"
  >
  <el-form-item  label="用户名" prop="username">
      <el-input
        v-model="LoginForm.username"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input   v-model="LoginForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    
    <el-form-item label="验证码" prop="" >
      <el-input style="width: 50%; margin-right: 10px;" v-model="LoginForm.securityCode" />
      <span  @click="getcode">
        <img  :src="vcUrl" alt="">
      </span>
    </el-form-item>
    <el-form-item >
      <el-button class="buttonDiv" type="primary" style=" width: 30%; "  @click="login(LoginForm) "
        >登录</el-button
      >
      
      <el-button class="buttonDiv" type="primary" style="width: 30%; margin: 10px auto;"   >
        <router-link  to="/register" style="text-decoration: none; color: #2a851a ;">注册</router-link></el-button
      >
    </el-form-item>
  </el-form>
        </div>
  </div>
</template>

<script>
import { register } from 'register-service-worker';
import {ref, onMounted} from 'vue';
import axios from 'axios'
export default {
  data(){
    return{
      isImge:false,
      vcUrl:"",
      LoginForm:{
        username:"",
            pass:"",
            securityCode:""
      },
      checkVercode:""
    }
  },
  mounted(){
    this.getcode()
   
  },
  methods:{
    getcode(){
          // this.vcUrl="http://10.33.11.77:8081/tanzu/user/vercode?" + new Date().getTime();
//     axios.get({
         
// },{responseType: 'blob'})
//   .then(res => {
//     let blob = new Blob([res.ddata]);
//     this.vcUrl = window.URL.createObjectURL(blob)
//     this.checkVercode=res.headers.vercode
//     console.log(this.vcUrl)
//     console.log(res)
   


//   })
axios.get('/api/tanzu/user/vercode', {
   responseType: 'blob',
}).then(res => {
   let blob = new Blob([res.data]);
   this.vcUrl = window.URL.createObjectURL(blob);
   this.checkVercode=res.headers.vercode
   console.log(res)
})
        },

        login(LoginForm){
//           this.$api.postLogin({
//             username:LoginForm.username,
//             password:LoginForm.pass,
//             vercode:LoginForm.securityCode

// },{ headers:{
//       'Vercode': this.checkVercode,
//   }
//   })
//   .then(res => {
//     console.log(res)
    

//   })
axios.post("/api/tanzu/user/login",
	 { username:LoginForm.username,
        password:LoginForm.pass,
            vercode:LoginForm.securityCode}, 
 	 {
          headers : {
              'Vercode':  this.checkVercode
          }
      }).then((res) => {
        console.log(res)
        if(res.data.msg=="通过"){
          localStorage.setItem("user_id",res.data.data.userId);
          this.$router.push('/');
        }
      }).catch(err => {
        console.log(err);
        alert("输入错误")
      })
        },
        goto(){
          this.$router.push('/register');
        }


  }
    
    
}
</script>

<style lang='less' scoped>
@import "../assets/form.css";
.el-form-item--large {
    --font-size: 20px;
}
.el-input {
  --el-input-focus-border-color: #1c7544;
  font-size: large;
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

