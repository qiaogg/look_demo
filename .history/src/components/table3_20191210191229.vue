<template>
  <div>
    <el-card>
      <div id="building" ></div>
    </el-card>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import '../../node_modules/echarts/dist/extension/bmap.min.js';
  import data from '../../static/data/data.json';

  export default {
    data() {
      return {
        chart: null 
      };
    },
    methods: {
      convertData (oldData) {
        let res = [];
        for (let i = 0; i < oldData.length; i++) {
          let geoCoord = data.building.geoCoordMap[oldData[i].name];
          if (geoCoord) {
            res.push({
              name: oldData[i].name,
              value: geoCoord.concat(oldData[i].value)
            });
          }
        }
        return res;
      },
      drawMap (id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          tooltip: {
            trigger: 'item'
          },
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          bmap: {
            // 百度地图中心经纬度
            center: [118, 29],
            // 地图缩放
            zoom: 5,
            roam: true,
            mapStyle: {
                style: 'light'
            }
          },
          series: [
            {
              name: '最喜爱建筑',
              type: 'scatter',
              coordinateSystem: 'bmap',
              data: this.convertData(data.building.buildContent),
              symbolSize: function (val) {
                return (val[2] + 2) * 3;
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgba(11, 110, 72, 1)'
                }
              }
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'bmap',
              data: this.convertData(data.building.buildContent.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 6)),
              symbolSize: function (val) {
                return (val[2] + 2) * 3;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'purple',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        });
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.drawMap('building');
        var that = this;
        var resizeTimer = null;
        window.onresize = function() {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            that.drawMap('building');
          }, 100);
        }
      })
    }
  }
</script>

<style scoped>
  #building {
    position: relative;
    left: 43%;
    width: 100%;
    height: 650px;
    margin-left: -40%;
    box-shadow: 0 0 10px #A6E3E9;
    border-radius: 10px;
  }	
</style>