<template>

<div class="home">
   
<div class="forma">
  <el-form
    ref="ruleFormRef"
    
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
 <p>记录你的碳足迹</p>
  <fieldset   style=" border: solid 1px #dcdfe6;">  
    <el-form-item class="tt" label="用电量"  prop="elec">
      <el-input  style="font-size: 25px;" v-model="elec" autocomplete="off"  @keyup.enter="commit"/>

    </el-form-item>

    <el-form-item class="tt" label="油耗公升数" prop="oill">
      <el-input
      style="font-size: 25px;"
      v-model="oill" 
        autocomplete="off"
      />
    </el-form-item>
    
   

    
    <el-form-item class="bu">
      <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />
      </el-col>
    <el-col :span="7">
      <el-button  style="height: 45px; width: 200%;"  type="primary" @click="commit"
        >生成记录</el-button
      ><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    
   
    
      
  </el-row>
      
    
    </el-form-item>
  </fieldset> 
  </el-form>
  </div>
  <div class="area1">
  
<div class="info" style=" box-shadow: 12px 12px 2px 1px rgba(215, 215, 227, 0.2);">
  <el-table stripe border :data="tableData" style="width: 100%">
			<el-table-column prop="id" label="id" width="180">
			</el-table-column>
			<el-table-column prop="homeElectricity" label="电量产生的碳" width="180">
			</el-table-column>
			<el-table-column prop="carElectricity" label="开车产生的碳">
			</el-table-column>
			<el-table-column prop="num" label="一共产生的碳">
			</el-table-column>
			<el-table-column prop="trees" label="需要的树">
			</el-table-column>
		</el-table>

</div>
</div>
<el-dialog v-model="sure"  width="30%">

<div style="margin-left:  40% ; margin-bottom: 40px;font-size: 25px; ">信息错误</div>

<el-button @click="closes" style=" margin-left:  40% ; width: 100px ; height: 60px; ">确定</el-button>
</el-dialog>
  </div>
</template>

<script>
import axios from "axios"

// @ is an alias to /src


export default {
  name: 'SignOut',
data(){
  return{
   nunbera:"",
      elec:"",
      oill:"",
      sum:0,
      tree:0,
      ex:"",
      number:"",
      id:"",
      infom:false,
      sure:false,
      ewm1:true,
      tableData:[],
      uId:""
  }
},
mounted(){
  this.uId=localStorage.getItem("user_id")
  this.showData()

},
  methods:{
    closes(){
      this.sure=false;
    },
    commit(){
      this.sum=parseInt( this.elec)*0.785+parseInt( this.oill)*0.785
      this.tree=this.sum/18
      this.$api.pushRecord({
    userId: this.uId,
    carElectricity: parseInt( this.oill), //碳排放
    homeElectricity: parseInt(this.elec),
    num: this.sum,
    trees: this.tree
},
)
  .then(res => {
    console.log(res)
    
    alert(res.data.msg)
    this.oill="",
    this.elec=""
    if(res.data.msg=="通过"){
           this.showData()
    }

  })
},
showData(){
  this.$api.getHois(this.uId,{
},
)
  .then(res => {
    this.tableData=res.data.data
    console.log(res)
    

  })
  .catch(err => {
        console.log(err);
        alert(err)
      })
}

  //   .then(res =>{
  //     if(res.data=="不存在此用户"){
  //       this.infom=false;
  //       this.sure=true;
  //       this.ewm1=true;
  //     }
  //     else{
  //     this.id=res.data.studentId,
  //     this.name=res.data.name,
  //     this.qq=res.data.qq

  //     axios.get("http://101.35.238.12:5000/score",
  //     {
  //       params:{
  //     stu_id:parseInt (this.number),
  //     exam:this.cid
  //       }
    
  // })
  //   .then(res =>{
  //     console.log(res.data);
  //     if(res.data==-1){
  //       this.infom=false;
  //       this.sure=true;
  //       this.ewm1=true;
  //     }
  //     else{
  //       this.ex=res.data
  //       this.infom=true;
  //       this.ewm1=false;
  //     }
  //   })
      
  //     }
    
     
  //   })

    




  }
}
</script>
<style>

.demo-ruleForm{
  position: absolute;
  height: 400px;
  width: 400px;
 /*  background-color: red; */
  top:21%;
  left: 20%;
  
}
.area1{
 
  position: absolute;
 height: 32%;
  width: 50%;
  float: right;
 top:10%;
 left: 50%;

}
.el-input{
  height: 50px;
 
}
.el-form .el-form-item{
 
  padding-top: 5%;
  text-align: center;

 
}
.el-row{
  width: 120%;
  height: 120%;
 
}
.el-button{
 width: 120%;
  height: 150%;
}
.img1{
  height: 50%;
  width: 25%;
  float: right;
}
.clearfix::after{
content:'';
display:block;
clear:both;
/*为了兼容性可增加一下代码*/
height: 0;
visibility:hidden;
}

.el-form-item {

  margin-right: 10%;
}
.centain{
  width: 1200px;
  margin: 0 auto;
}

.tu{
 
  height: 100%;
  width: 100%;

  
}

.tt .el-form-item__label {
  font-size: 20px;
  line-height: 50px;
  
}
.infos{
  font-size: 24px;
  height: 50px;
  margin-top: 66px;
  margin-left: 20px;
  border-bottom: solid 1px #dcdfe6;
}


</style>
