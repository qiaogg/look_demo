<template>
    <div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-search"></span>
              明星收入数据统计
        </div>
        <br>
        <el-card style="margin-top:40px">
          <h3>2018年数据统计</h3>
            <el-tabs type="border-card">
                <el-tab-pane label="柱状图">
                     <div id="chart1" style='width:320px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="饼状图">
                    <div id="chart2" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="点图">
                    <div id="chart3" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="折线图">
                    <div id="chart4" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
        <el-card style="margin-top:40px">
          <h3>2017年数据统计</h3>
            <el-tabs type="border-card">
                <el-tab-pane label="柱状图">
                     <div id="chart1" style='width:320px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="饼状图">
                    <div id="chart2" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="点图">
                    <div id="chart3" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="折线图">
                    <div id="chart4" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
            </el-tabs>  
        </el-card>
        <el-card style="margin-top:40px">
          <h3>2016年数据统计</h3>
            <el-tabs type="border-card">
                <el-tab-pane label="柱状图">
                     <div id="chart1" style='width:320px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="饼状图">
                    <div id="chart2" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="点图">
                    <div id="chart3" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="折线图">
                    <div id="chart4" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
            </el-tabs>  
        </el-card>
        <el-card style="margin-top:40px">
          <h3>2015年数据统计</h3>
            <el-tabs type="border-card">
                <el-tab-pane label="柱状图">
                     <div id="chart1" style='width:320px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="饼状图">
                    <div id="chart2" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="点图">
                    <div id="chart3" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
                <el-tab-pane label="折线图">
                    <div id="chart4" style='width:500px;height:400px;margin-right:400px'></div>
                </el-tab-pane>
            </el-tabs>  
        </el-card>
    </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
           Xdata1 : ['成龙','周润发','刘德华','邓超','黄渤','陈坤','彭于晏','甄子丹','吴京'],
           Ydata1:[8000, 8000, 3000, 3000, 3000, 3000, 3000,3000,3000,3000],
           Ydata2:[8000, 8000, 3000, 3000, 3000, 3000, 3000,3000,3000,3000],
           Xdata2:  ['成龙','周润发','刘德华','邓超','黄渤','陈坤','彭于晏','甄子丹','吴京'],
           data2:[
                {value:8000, name:'成龙'},
                {value:8000, name:'周润发'},
                {value:3000, name:'刘德华'},
                {value:3000, name:'邓超'},
                {value:3000, name:'黄渤'},
                {value:3000, name:'陈坤'},
                {value:3000, name:'彭于晏'},
                {value:3000, name:'甑子丹'},
                {value:3000, name:'吴京'},
                ],
            data3:[
                 [10.0, ],
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
      let Chart2 = echarts.init(document.getElementById('chart2'));
      let Chart3 = echarts.init(document.getElementById('chart3'));
      let Chart4 = echarts.init(document.getElementById('chart4'));
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
     let option2 = {
    title : {
        text: '数据源饼状图统计',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: this.Xdata2
    },
    series : [
               {
               name: '访问来源',
               type: 'pie',
               radius : '55%',
               center: ['50%', '60%'],
               data:this.data2,
               itemStyle: {
                   emphasis: {
                       shadowBlur: 10,
                       shadowOffsetX: 0,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               }
             }
           ]
        };
    let option3 = {
                title : {
                       text: '数据源点图统计',
                       subtext: '纯属虚构',
                       x:'center'
                },
                xAxis: {},
                yAxis: {},
                series: [{
                      symbolSize: 20,
                      data: this.data3,
                      type: 'scatter'
                    }]
               };
   let option4 = {
       title : {
              text: '数据源折线图统计',
              subtext: '纯属虚构',
              x:'center'
                },
       xAxis: {
           type: 'category',
           data: this.Xdata4,
           },
       yAxis: {
           type: 'value'
           },
       series: [{
           data: this.Ydata4,
           type: 'line'
           }]
          };
      Chart1.setOption(option1);
      Chart2.setOption(option2);
      Chart3.setOption(option3);
      Chart4.setOption(option4);
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