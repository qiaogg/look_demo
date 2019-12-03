
<template>
  <div>
   <el-card>
       <div id="chart_example" style="margin-right:2000px;width:800px;heigth:300px"></div>
   </el-card>
  </div>
</template>
<script>
import echarts from 'echarts'
  export default {
    name:'Table',
    data() {
      return {
        data:[10, 52, 200, 334, 390, 330, 220]
      }
    },
    mounted() {
      let this_ = this;
      //初始化一个echart实例
      let myChart = echarts.init(document.getElementById('chart_example'));
      var data = [{
    fixed: true,
    x: myChart.getWidth() / 2,
    y: myChart.getHeight() / 2,
    symbolSize: 20,
    id: '-1'
}];

var edges = [];
      var symbolSize = 2.5;
      let option = {
    series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        data: data,
        force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 100,
            edgeLength: 5
        },
        edges: edges
    }]
};

setInterval(function () {
    data.push({
        id: data.length
    });
    var source = Math.round((data.length - 1) * Math.random());
    var target = Math.round((data.length - 1) * Math.random());
    if (source !== target) {
        edges.push({
            source: source,
            target: target
        });
    }
    myChart.setOption({
        series: [{
            roam: true,
            data: data,
            edges: edges
        }]
    });

    // console.log('nodes: ' + data.length);
    // console.log('links: ' + data.length);
}, 500);

       // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
 
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