<template>
  <div >
    <el-container id="Main">
      <el-header>
        <h1>明星数据统计</h1>
      </el-header>
      <el-container>
        <el-aside style="width:200px" class="tac">
          <el-menu router :default-active="$route.path">
             <h2>信息搜索</h2>
            <el-menu-item index="/Search">
                <i class="el-icon-search"></i>
                <span slot="title">查询</span>
            </el-menu-item>
              <h2>明星关系</h2>
             <el-menu-item index="/Relation">
                <i class="el-icon-document"></i>
                <span slot="title">明星关系图</span>
            </el-menu-item>
             <h2>明星收入</h2>
            <el-menu-item index="/Sort">
                <i class="el-icon-setting"></i>
                <span slot="title">收入排行榜</span>
             </el-menu-item>
              <el-menu-item index="/test2">
                <i class="el-icon-setting"></i>
                <span slot="title">明星收入数据统计</span>
             </el-menu-item>
             <el-menu-item index="/Source">
                <i class="el-icon-setting"></i>
                <span slot="title">收入来源</span>
             </el-menu-item>
             <h2>明星聚集地</h2>
             <el-menu-item index="/table3" :disabled='lead'>
                <i class="el-icon-setting"></i>
                <span slot="title">居住聚集地</span>
             </el-menu-item>
              <h2>明星八卦</h2>
             <el-menu-item index="/cloud">
                <i class="el-icon-document"></i>
                <span slot="title">明星八卦热词</span>
            </el-menu-item>
             <el-menu-item index="/biao2  ">
                <i class="el-icon-document"></i>
                <span slot="title">八卦新闻</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <h5>明星数据统计1.0.0</h5>
      </el-footer>
    </el-container>

  </div>
</template>
<script>
export default {
  data(){
    return{
      lead:0,
    }
  }
}
</script>
<style lang="scss" scoped>
#Main{
   height: 50vh;
   width: 200vh;
.el-main{
  background-color: rgb(221, 227, 233);
}
.el-header{
  h1{
    color: #606266

  }
  background-color: #EBEEF5;
}
.el-aside{
  background-color: #ffffff;
  h2 {
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
            padding-top: 20px;
            padding-bottom: 10px;
            color: #B0B0B0;
        }
}
.el-footer {
  h5{
    color: #409EFF;
  }
        margin-left:199px;  
        width:1310px;
        background: rgb(221, 227, 233);
        padding-bottom:20px;
        h1 {
            float:left;
            padding:10px;
            padding-top:40px;
            color:rgb(107, 185, 216);
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
        }
        h2 {
            float:right;
            padding-right:65px;
            padding-top:40px;
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
            color: #B0B0B0;
        }
    }
}
</style>