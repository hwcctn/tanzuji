<template>
  <div>个人信息</div>
  
  <div class="show">
    <el-form-item label="图片"  prop="image" style="background-color: aliceblue; margin: 0;">
      <el-upload
      style="margin: 0 auto;"
  class="avatar-uploader"
  :action="uploimg"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  
</el-upload>
</el-form-item>

    <!-- <p v-model="userinfo.username" style="margin-left:6%;margin-top: 5%">昵称:<span style="margin-left: 3%;line-height:40px">{{userinfo.username}}</span></p>
    <p v-model="userinfo.usersex" style="margin-left:6%;margin-top: 5%">性别:<span style="margin-left: 3%;line-height:40px">{{userinfo.usersex}}</span></p>
    <p v-model="userinfo.useremail" style="margin-left:6%;margin-top: 5%">邮箱:<span style="margin-left: 3%;line-height:40px">{{userinfo.useremail}}</span></p>
    <p v-model="userinfo.userjianjie" style="margin-left:6%;margin-top: 5%">简介:<span style="margin-left: 3%;line-height:40px">{{userinfo.userjianjie}}</span></p> -->
<!--    
   昵称:<span style="margin-left: 3%;line-height:40px;">{{userinfo.name}}</span>
   
   邮箱:<span style="margin-left: 3%;line-height:40px ">{{userinfo.useremail}}</span>
  
   简介:<span style="margin-left: 3%;line-height:40px">{{userinfo.message}}</span> -->
   <el-descriptions
    class="margin-top"
    title="your info"
    :column="3"
    size="large"
    border
  >
   <el-descriptions-item>
   <template #label>
        <div class="cell-item">
          Username
        </div>
      </template>
      {{userinfo.name}}
    </el-descriptions-item>
    <el-descriptions-item>
   <template #label>
        <div class="cell-item">
          邮箱
        </div>
      </template>
      {{userinfo.email}}
    </el-descriptions-item>
    <el-descriptions-item>
   <template #label>
        <div class="cell-item">
          简介
        </div>
      </template>
      {{userinfo.message}}
    </el-descriptions-item>
    
  </el-descriptions>

  <button @click="upmsg">更新信息</button>
  </div>

  <div>
  <el-dialog title="修改信息" v-model="updataUserVisible" width="50%" >
			<el-form :model="updateUserForm" label-width="80px">
				<el-form-item label="昵称:">
					<el-input v-model="updateUserForm.id"></el-input>
				</el-form-item>
				
				<el-form-item label="邮箱:">
					<el-input v-model="updateUserForm.email"></el-input>
				</el-form-item>
				<el-form-item label="简介:">
					<el-input v-model="updateUserForm.info" type="textarea"></el-input>
				</el-form-item>
				
				<el-form-item>
					
					<el-button type="primary" @click="onUpdateCommit(updateUserForm)" style="margin-left: 80px; height: 150%; width: 180px;float: left;">立即修改</el-button>
					<el-button @click="onupdatecancel" style="height: 150%; width: 180px;float: left; margin-left: 80px;" >取消</el-button>
				
				</el-form-item>
			</el-form>
		</el-dialog>
</div>

</template>

<script>
import { useTransitionFallthroughEmits } from 'element-plus'
import { timePanelSharedProps } from 'element-plus/es/components/time-picker/src/props/shared'

export default {
  data(){
    return{
      userinfo:{

      },
      imageUrl: '',
      updataUserVisible:false,
      updateUserForm:{
        id:"",
        email:"",
        info:"",
       
      },
       
      uploimg:""
    }
  },
  mounted(){
    this.uploimg="api/tanzu/user/"+localStorage.getItem("user_id")+"/Inform/ava_image"
    console.log(this.uploimg)
    this.getUserinfo()
  
    
  },
  methods: {
    onupdatecancel(){
       this.updataUserVisible=false
    },
    getUserinfo(){
      let userId=localStorage.getItem("user_id")
      this.$api.getUserinfo(userId,{}).then(res=>{
        console.log(res)
        this.userinfo=res.data.data
        this.imageUrl='https://imge-1319580658.cos.ap-guangzhou.myqcloud.com/'+res.data.data.avaImage
        console.log(this.imageUrl)
      })
    },
    upmsg(){
      this.updataUserVisible=true
    },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(URL.createObjectURL(file.raw))
        
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      onUpdateCommit(updateUserForm){
        let userId=localStorage.getItem("user_id")
       this.$api.putUser(userId,{
        name:updateUserForm.id ,
        message: updateUserForm.email,
        email: updateUserForm.info
       }).then(res=>{
        console.log(res)
        this.getUserinfo()
        this.updataUserVisible=false
      })
      }
    }
}

</script>

<style>
.cell-item{
  width: 50px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.show{
  margin: 100px auto;
  width: 80%;
  height: 450px;
  border: 5px solid lightcyan;
  transition: all 0.9s;
  border-radius: 10px;

}

.show:hover{
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
  margin-top: 90px;
}


</style>
