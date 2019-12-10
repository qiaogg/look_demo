<template>
  <div id="Main">
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-search"></span>
              信息搜索
        </div>
        <br>
    <el-card style="height:100px;width:1270px;margin-top:40px">
      <el-col :span="5">
        <el-input v-model="name" placeholder="请输入明星姓名"></el-input>
      </el-col>
      <el-col :span="2" :offset="1"><el-button type="primary" @click="Search" style="width:150px">查询</el-button></el-col>
      <br>      
    </el-card>
    <el-card style="margin-top:30px;height:500px;width:1270px">
            <div slot="header" class="clearfix">
                <span>个人简介:</span>
                <span id="name"></span>
                <el-button style="float:right; padding: 3px 0" @click="drawer = true" type="text">更多信息</el-button>
            </div>
            <el-container style="height:400px">
              <el-aside width="300px" >
                  <el-image :src="img" style="width:300px;height:300px;margin-top:42px;margin-right:0px"></el-image>
              </el-aside>
              <el-main style="background-color:#FFFFFF;">
               <h4 id="name"></h4>
               <p id="demo1"></p>
              </el-main>
            </el-container>
    </el-card>
  </div>
</template>
<script>
import data from '../../static/data/data.json';
export default {
  data(){
    return{
      name:'',
      datail:'',
      img:'',
      drawer: false,
      urls:[
        {"url":'http://img3.imgtn.bdimg.com/it/u=1243579802,477407275&fm=26&gp=0.jpg'},
        {"url":'http://img0.imgtn.bdimg.com/it/u=165140877,3327178563&fm=26&gp=0.jpg'},
        {"url":'http://img0.imgtn.bdimg.com/it/u=165140877,3327178563&fm=26&gp=0.jpg'},
        {"url":'http://img3.imgtn.bdimg.com/it/u=3347118621,2155080646&fm=26&gp=0.jpg'},
        {"url":'http://img0.imgtn.bdimg.com/it/u=2847987682,2833770564&fm=26&gp=0.jpg'}
      ],
     // temp:false
    }
  },
  methods:{
    Search(){
        console.log(1)
      var temp = 1
      for(let i = 0;i<data.data.length;i++)
      { 
          console.log(data.data[0].perChName)
        if(this.name == data.data[i].perChName)
            {   temp = 0
                this.datail = data.data[i].detail
                this.name = data.data[i].perChName
                // this.img =data.urls[i].url
                document.getElementById("demo1").innerHTML= data.data[i].detail,
                document.getElementById("name").innerHTML= data.data[i].perChName
            }
            console.log(temp)  
       }
       if(temp == 1){
            this.$message({
                message: '没有这个明星',
                type: 'warning'
            });
       }else{
           this.$message({
            message: '查询成功',
            type: 'success'
        });
       }
       temp = 1
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>
<style lang="scss" scoped>
#Main{
  width: 600px;
    .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 200px;

  }
}
</style>