<template>
    <div class="collection-block">
     <div class="block-padding">
         <div class="header">
             <div class="title">
                 <router-link to="/course">
                    <el-icon><Back /></el-icon>
                 </router-link>
                <div class="music-info">
                 <p>{{ this.$route.params.courseName }}</p>
                
                </div>
             </div>
         </div>
       <div class="void">         
<video
    ref="videoRef"
    :src="`https://video-1319580658.cos.ap-guangzhou.myqcloud.com/${this.$route.params.videoUrl}`"
    width="650"
    height="400"
    controls
></video>
     </div>
     </div>
    </div>
    <div class="liuyan">
<p>留下你的评论吧</p>
<el-form :model="form" label-width="100px">
    <el-form-item label="come on">
      <el-input v-model="desc" style="width: 90%;" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="commit" >Create</el-button>
    </el-form-item>
</el-form>
    </div>
    <div class="show">
      <div v-for="(item,index) in data" 
        :key="index"
        class="show-content">
        <div class="show-name">{{ item.userName }}</div>
			<div class="show-txt">
				<p class="">{{item.content }}</p>
			</div>
			<div class="show-time">{{item.time }}</div>
			<div class="show-close">x</div>


    </div>
    </div>
 </template>
 
 <script>

 export default{
     data(){
         return {
             playInfor:{},
             currentTime:0,
             desc:"",
             data:[]
             
         }
     },
    
     mounted(){
        this.getcomm()
        console.log(this.$route.params.id)
     },
     beforeDestroy(){
         this.remuveEventHandle()
     },
     methods:{
        commit(){
            console.log(localStorage.getItem("user_id"))
            this.$api.pushmessge(this.$route.params.id,{
               userId: localStorage.getItem("user_id"),
                content:this.desc
      }).then(res=>{
        console.log(res)
        if(res.status==200){
        alert("发表成功")
        this.getcomm()
        }

      })
        },
        getcomm(){
            this.$api.getmessge(this.$route.params.id,{})
            .then(res=>{
                console.log(res)
                this.data=res.data.data

            })
        }
        //   //获取音乐播放时间
        //  //音乐总时长
        //  //音乐正在播放的时间节点
        //  addEventHandle(){
        //      this.$refs.player.addEventListener("timeupdate",this.currentTimeHandle)
 
        //      },
        //      remuveEventHandle(){
        //          this.$refs.player.removeEventListener("timeupdate",this.currentTime)
        //      },
        //      currentTimeHandle(){
                 
        //          this.currentTime=this.$refs.player.currentTime
        //      }
         }
     }
 
 </script >
 <style lang='less'>
 .collection-block {
     background-color: #f8f8f8;
     padding: 5px 0;
   }
   
   .block-padding {
     padding: 10px 17px;
     background-color: #fff;
   }
 .header {
     padding: 15px;
 }
 
 .music-info {
     flex: 1;
     font-size: 20px;
    
   
    
 }
 
 .title {
     display: flex;
     
     text-align: center;
 }
 
 .left {
     font-size: 30px;
 }
 
 .ca {
     color: red;
 }
 
 .right {
     font-size: 30px;
 }
 


 
 .song-info-img img {
     width: 50%;
     border-radius: 5px;
     box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
 }
 
 .song-lrc {
     margin-top: 10px;
     min-height: 50px;
 }
 
 .iconbox {
     display: flex;
     margin-top: 30px;
 }
 
 .iconbox .box {
     flex: 1;
 }
 
 .void {
     width: 100%;
     text-align: center;
 }
 
 
 
 .active {
     color: #222;
 }
 
 .author {
     font-size: 12px;
     color: #999;
 }
 .show {
	width: 600px;
	margin: 20px auto;
}
 
.show-content {
	width: 578px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 10px;
	padding: 10px;
	position: relative;
	overflow: hidden;
}
 
.show-name {
	width: 100%;
	text-align: left;
	font-size: 14px;
	color: #333;
	font-weight: bold;
}
 
.show-txt {
	width: 100%;
	color: #444;
	font-size: 14px;
	margin-top: 10px;
}
 
.show-txt p {
	width: 100%;
	word-wrap: break-word;
}
 
.show-time {
	font-size: 12px;
	color: #808080;
	margin-top: 10px;
}
 
.show-close {
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 12px;
	color: #ccc;
	cursor: pointer;
	transition: .5s;
}
 
.show-close:hover {
	color: red;
}

 </style>