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
        <el-card style="margin-top:40px">
            <div id="chart2" style='width:800px;height:600px;margin-right:400px'></div>  
        </el-card>
    </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
          data:[
            {name: '电影', max: 250},
            {name: '商业演出', max: 430},
            {name: '广告费', max: 350},
            {name: '电视剧', max: 5},
            {name: '个人投资', max: 200},
            {name: '国家', max: 400}
        ],
        source:[
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['商业演出', 20.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['电影', 55.5, 92.1, 115, 150, 201, 205],
                ['国家', 6.1, 7, 10, 11, 13, 13],
                ['电视剧', 50.2, 101.1, 180, 190, 192, 183],
                ['个人投资', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['广告费', 32.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
      }
    },
    mounted() {
    var dataBJ = [
    [55,9,56,0.46,18,6,1],
    [25,11,21,0.65,34,9,2],
    [56,7,63,0.3,14,5,3],
    [33,7,29,0.33,16,6,4],
    [42,24,44,0.76,40,16,5],
    [82,58,90,1.77,68,33,6],
    [74,49,77,1.46,48,27,7],
    [78,55,80,1.29,59,29,8],
    [267,216,280,4.8,108,64,9],
    [185,127,216,2.52,61,27,10],
    [39,19,38,0.57,31,15,11],
    [41,11,40,0.43,21,7,12],
    [64,38,74,1.04,46,22,13],
    [108,79,120,1.7,75,41,14],
    [108,63,116,1.48,44,26,15],
    [33,6,29,0.34,13,5,16],
    [94,66,110,1.54,62,31,17],
    [186,142,192,3.88,93,79,18],
    [57,31,54,0.96,32,14,19],
    [22,8,17,0.48,23,10,20],
    [39,15,36,0.61,29,13,21],
    [94,69,114,2.08,73,39,22],
    [99,73,110,2.43,76,48,23],
    [31,12,30,0.5,32,16,24],
    [42,27,43,1,53,22,25],
    [154,117,157,3.05,92,58,26],
    [234,185,230,4.09,123,69,27],
    [160,120,186,2.77,91,50,28],
    [134,96,165,2.76,83,41,29],
    [52,24,60,1.03,50,21,30],
    [46,5,49,0.28,10,6,31]
];
var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};
      let this_ = this;
      let Chart1 = echarts.init(document.getElementById('chart1'));
      let Chart2 = echarts.init(document.getElementById('chart2'));
       let  option2 = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: this.source
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };

    Chart2.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
      let option1 = {
          backgroundColor: '#0000',
    title: {
        text: '明星收入来源',
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },
    legend: {
        bottom: 5,
        data: ['明星'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    radar: {
        indicator:this.data,
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '北京',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#F9713C'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        }
    ]
};
    
      Chart1.setOption(option1);
       Chart2.setOption(option2);
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