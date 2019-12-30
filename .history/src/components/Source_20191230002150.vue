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
         let option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

     Chart1.setOption(option1);
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize',function() {myChart.resize()});
    }
}
</script>