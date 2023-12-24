
<template>
   <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>碳足迹课程</h3>
      </div>
    <div class="list clearfix"  >
        <router-link
        :to="`/player/${item.id}/${item.courseName}/${item.videoUrl}`"
        class="item"
        tag="div"
        v-for="(item,index) in couseList" 
        :key="index"
        :class="{'clear-padding': index%5!==1}"
        >
            <div class="img-warpper" >
             
                <img :src="`https://imge-1319580658.cos.ap-guangzhou.myqcloud.com/${item.imageUrl}`" alt="" style="width: 250px;height: 300px;">
            </div>

            <div class="main">{{ item.courseName }}</div>
            <div class="gray">{{ item.origin }}</div>
        </router-link>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'ProductBox',

  data() {
      return {
         course:{
          cimg:"",
          brief:"",
         
         },
         couseList:[]
      }
  },
  mounted(){
this.getCous()
  },
  methods: {
     getCous(){
      this.$api.getCourse({
      }).then(res=>{
        console.log(res.data.data)
        this.couseList=res.data.data
      
      })
     }
  }
}
</script>

<style scoped>
.list {
  width: 100%;
 
 
}

.list .item {
  float: left;
  width: 20%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.clear-padding {
  padding: 0 !important;
}

.main {
  margin-top: 4px;
  font-size: 12px;
}

.gray {
  font-size: 12px;
  color: #999;
}

.btn-more {
  font-size: 12px;
  text-align: right;
  color: #333;
}
</style>