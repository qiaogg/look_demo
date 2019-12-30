<template>
  <div>
    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-search"></span>
      明星八卦热词
    </div>
    <br>
    <el-card style="margin-top:40px">
      <div id="word_cloud1"></div>
    </el-card>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts-wordcloud';
  import data from '../../static/data/data.json';

  export default {
    data () {
      return {
        data1:[
          {
            name:"王思聪妈妈帮还债",
            value:200000
          },
          {
            name:"佟丽娅晒圣诞美照",
            value:179837
          },
          {
            name:"王思聪限消令和解",
            value:96192
          },
          {
            name:"徐子珊退出娱乐圈",
            value:92531
          },
          {
            name:"陈坤儿子近照",
            value:87513
          },
          {
            name:"徐锦江的圣诞祝福",
            value:73308
          },
          {
            name:"刘昊然买液态屁",
            value:72287
          },
          {
            name:"papi酱孕肚",
            value:71285
          },
          {
            name:"炎亚纶向路人道歉",
            value:69674
          },
          {
            name:"杨烁回应教育争议",
            value:65619
          },
          {
            name:"87红楼梦演员重聚",
            value:42090
          },
          {
            name:"冯小刚调侃徐帆",
            value:41530
          },
          {
            name:"靳东王鸥同框",
            value:41522
          },
          {
            name:"美丽人生定档",
            value:38083
          },
          {
            name:"刘銮雄太太消费",
            value:33575
          },
          {
            name:"王思聪被执行和解",
            value:30566
          },
          {
            name:"泫雅李佳琦同框",
            value:11887
          },
          {
            name:"曝王思聪被逼联姻",
            value:10248
          },
          {
            name:"王阳明宣布当爸",
            value:9985
          },
          {
            name:"魏大勋肚皮舞",
            value:9500
          },
          {
            name:"老友记确定重聚",
            value:8355
          },
          {
            name:"魔兽世界怀旧服",
            value:7700
          },
          {
            name:"易烊千玺演唱会",
            value:6945
          },
          {
            name:"刘鑫微博被封",
            value:6418
          },
          {
            name:"林宗虎逝世",
            value:5423
          },
          {
            name:"张瀞仁离世",
            value:5345
          },
          {
            name:"易烊千玺参加军训",
            value:4549
          },
          {
            name:"唐嫣圣诞节自拍",
            value:4165
          },
          {
            name:"生化危机2重制版",
            value:2041
          },

        ]
      };
    },
    methods: {
      drawCloud (id, myshape) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 20,
            top: 20
          },
          tooltip:{},
          series: [{
            type: 'wordCloud',
            shape: myshape,
            // shape: 'cardioid',
            // shape: 'pentagon',
            // shape: 'circle',
            left: 'center',
            top: 30,
            width: '75%',
            height: '80%',
            right: null,
            bottom: null,
            sizeRange: [10, 80],
            rotationRange: [0, 0],
            rotationStep: 45,
            gridSize: 15,

            textStyle: {
              normal: {
                fontFamily: 'Microsoft Yahei',
                fontWeight: 'bold',
                color: function() {
                  return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') + ')'
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: this.data1,
          }]
        });
      }
    },
    mounted() {
      // 保证this.$el已经插入文档
      this.$nextTick(function() {
        this.drawCloud('word_cloud1', 'cardioid');//cardioid
        this.drawCloud('word_cloud2', 'pentagon');
        var that = this;
        var resizeTimer = null;
        window.onresize = function() {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            that.drawCloud('word_cloud1', 'cardioid');
            that.drawCloud('word_cloud2', 'pentagon');
          }, 100);
        }
      })
    }
  }
</script>
<style scoped>
  #word_cloud1,
  #word_cloud2 {
    position: relative;
    left: 50%;
    width: 90%;
    height: 560px;
    margin-left: -45%;
    border: solid #9E579D 1px;
    box-shadow: 0 0 8px #FC85AE;
    border-radius: 10px;
  }
  #word_cloud2 {
    margin-top: 15px;
    height: 480px;
  }
</style>

