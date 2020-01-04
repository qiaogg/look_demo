
<template>
  <div>
  <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-film"></span>
              明星关系图
          </div>
          <br>
    <el-card>
      <div id="statistics">fuck you</div>
    </el-card>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import 'echarts-gl';
  export default {
    data() {
      return {
        xData: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        yData: ['2015', '2016', '2017', '2018', '2019'],
        data: [
          [0, 0, 6301], [0, 1, 6840], [0, 2, 7376], [0, 3, 7918], [0, 4, 8457], [0, 5, 9536], [0, 6, 12942], [0, 7, 16348], [0, 8, 19755], [0, 9, 22215], [0, 10, 24675], [0, 11, 27136],
          [1, 0, 3850], [1, 1, 11200], [1, 2, 14493], [1, 3, 17206], [1, 4, 20700], [1, 5, 24600], [1, 6, 25900], [1, 7, 30000], [1, 8, 35540], [1, 9, 40000], [1, 10, 45340], [1, 11, 49283],
          [2, 0, 6324], [2, 1, 11086], [2, 2, 14460], [2, 3, 20738], [2, 4, 24444], [2, 5, 27180], [2, 6, 32330], [2, 7, 42710], [2, 8, 43666], [2, 9, 49123], [2, 10, 52388], [2, 11, 55910],
          [3, 0, 4953], [3, 1,15093], [3, 2, 20271], [3, 3, 24124], [3, 4, 28450], [3, 5, 32035], [3, 6, 39950], [3, 7, 45850], [3, 8, 49073], [3, 9, 53213], [3, 10, 57890], [3, 11, 60976],
          [4, 0, 4953], [4, 1,15093], [4, 2, 20271], [4, 3, 24124], [4, 4,28450], [4, 5, 32035], [4, 6, 39950], [4, 7, 45850], [4, 8, 49073], [4, 9, 53213], [4, 10, 57890], [4, 11, 60976]
        ],
        data2:[
          {value:25, name:'影视作品'},
          {value:51, name:'广告代言'},
          {value:3, name:'观众支持'},
          {value:10, name:'投资'},
          {value:11, name:'其他'}
        ],

      }
    },
    // data(){
    //   return{
    //     hours:['12a', '1a', '2a', '3a', '4a', '5a','6a','7a', '8a', '9a','10a','11a',
    //       '12p', '1p', '2p', '3p', '4p', '5p',
    //       '6p', '7p', '8p', '9p', '10p', '11p'],
    //     days:['Saturday', 'Friday', 'Thursday',
    //       'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    //     data:[[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]],
    //   }
    // },

    mounted() {

      let this_ = this;
      let Chart1 = echarts.init(document.getElementById('statistics'),'shine');

      let option1 = {
        title:{
          text:'中国电影票房月度累积数据',
          subtext:'2015-2019',
          left:'center',

        },
        tooltip: {},
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {}
          },
          right: 15,
          top: 10
        },
        label:{
          textStyle:{
            color:'#ffffff',
          }
        },
        visualMap: {
          //todo
          max: 65000,
          min:5000,
          inRange: {
            color: ['#0066FF', '#175DE8', '#2E53D1', '#464AB9', '#5D41A2', '#74388B', '#8B2E74', '#A2255D', '#B91C46', '#D1132E', '#E80917']
          }
        },
        xAxis3D: {
          type: 'category',
          data: this.xData,
          name:'月份'
        },
        yAxis3D:{
          type:'category',
          data:this.yData,
          name:'年份',
        },
        zAxis3D: {
          type: 'value',
          name:'千万',
        },
        grid3D: {
          boxWidth: 240,
          boxDepth: 100,
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3,
            }
          }
        },
        series: [{
          // name:'statistics',
          type: 'bar3D',
          data: this.data.map(function (item) {
            return {
              value: [item[1], item[0], item[2]],
            }
          }),
          shading: 'lambert',
          label: {
            textStyle: {
              fontSize: 15,
              borderWidth: 1,
            }
          },
          emphasis: {
            label: {
              textStyle: {
                text:'{b}',
                fontSize: 20,
                color: '#FF9900',
              },
              itemStyle: {
                color: '#FF9900',
              }
            }
          }

        }]
      };

      // let option1={
      //   tooltip: {},
      //   visualMap: {
      //     max: 20,
      //     inRange: {
      //       color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      //     }
      //   },
      //   xAxis3D: {
      //     type: 'category',
      //     data: this.hours
      //   },
      //   yAxis3D: {
      //     type: 'category',
      //     data: this.days
      //   },
      //   zAxis3D: {
      //     type: 'value'
      //   },
      //   grid3D: {
      //     boxWidth: 200,
      //     boxDepth: 80,
      //     light: {
      //       main: {
      //         intensity: 1.2
      //       },
      //       ambient: {
      //         intensity: 0.3
      //       }
      //     }
      //   },
      //   series: [{
      //     type: 'bar3D',
      //     data: this.data.map(function (item) {
      //       return {
      //         value: [item[1], item[0], item[2]],
      //       }
      //     }),
      //     shading: 'realistic',
      //
      //     label: {
      //       show: false,
      //       textStyle: {
      //         fontSize: 16,
      //         borderWidth: 1
      //       }
      //     },
      //
      //     itemStyle: {
      //       opacity: 0.4
      //     },
      //
      //     emphasis: {
      //       label: {
      //         textStyle: {
      //           fontSize: 20,
      //           color: '#900'
      //         }
      //       },
      //       itemStyle: {
      //         color: '#900'
      //       }
      //     }
      //   }]
      // };

      Chart1.setOption(option1);

      window.addEventListener('resize',function() {Chart1.resize()});
    },
    watch: {},
    methods: {},
    created() {
      console.log('fuck you');
    }
  }
</script>
<style scoped>
  #statistics {
    position: relative;
    left: 45%;
    width: 100%;
    height: 650px;
    margin-left: -45%;
    box-shadow: 0 0 10px #A6E3E9;
    border-radius: 10px;
  }
</style>
