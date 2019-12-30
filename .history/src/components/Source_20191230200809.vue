<template>
    <div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-search"></span>
              明星收入数据统计
        </div>
        <br>
        <el-card style="margin-top:40px">
            <div id="chart1" style='width:320px;height:400px;margin-right:400px'></div>  
        </el-card>
    </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
           Xdata1 : ['数据','数据','数据','数据','数据','数据','数据'],
           Ydata1:[10, 52, 200, 334, 390, 330, 220],
           Ydata2:[10, 52, 200, 334, 390, 330, 220],
           Xdata2: ['数据1','数据2','数据3','数据4','数据5'],
           data2:[
                {value:335, name:'数据1'},
                {value:310, name:'数据2'},
                {value:234, name:'数据3'},
                {value:135, name:'数据4'},
                {value:1548, name:'数据5'}
                ],
            data3:[
                 [10.0, 8.04],
                 [8.0, 6.95],
                 [13.0, 7.58],
                 [9.0, 8.81],
                 [11.0, 8.33],
                 [14.0, 9.96],
                 [6.0, 7.24],
                 [4.0, 4.26],
                 [12.0, 10.84],
                 [7.0, 4.82],
                 [5.0, 5.68]
                 ],
            Ydata4: [820, 932, 901, 934, 1290, 1330, 1320],
            Xdata4: ['数据','数据','数据','数据','数据','数据','数据'],
      }
    },
    mounted() {
      let this_ = this;
      let Chart1 = echarts.init(document.getElementById('chart1'));
      let option1 = {
           title : {
             text: '数据源柱状图统计',
             subtext: '纯属虚构',
             x:'center'
          },
          color: ['#3398DB'],
          tooltip : {
             trigger: 'axis',
             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
             type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
               }
           },
          grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
          },
          xAxis : [
          {
            type : 'category',
            data : this.Xdata1,
            axisTick: {
                alignWithLabel: true
               }
          }
          ],
         yAxis : [
          {
            type : 'value'
          }
         ],
        series : [
          {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:this.Ydata1
          }
        ]
    };
    
      Chart1.setOption(option1);
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize',function() {myChart.resize()});
    },
    methods: {},
    watch: {},
    created() {
 
    }
  }
</script>
<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_example{
    width: 50%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
    
  }
</style>