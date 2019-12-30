<template>
    <div>
        <div id="chart1" style='width:320px;height:400px;margin-right:400px'></div>
    </div>
</template>
<script>
export default {
    data(){

    },
    mounted(){
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
    }
}
</script>