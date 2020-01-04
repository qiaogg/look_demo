<template>
<div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
              <span class="el-icon-document"></span>
              收入排行榜
        </div>
        <br>
    <el-card style="height:800px;margin-top:40px">
          <el-tabs v-model="activeName" type="card" style="float:left">
            <el-tab-pane label="2018" name="first">
                <xdh-scroll :on-reach-bottom="handleReachBottom">
                    <el-card v-for="(item, index) in list2" :key="index" style="margin: 10px 0;width:600px;height:50px">
                  {{ item.index }} 、{{item.name}}
    </el-card>
            </xdh-scroll>
            </el-tab-pane>
            <el-tab-pane label="2017" name="second">
              <xdh-scroll :on-reach-bottom="handleReachBottom">
                <el-card v-for="(item, index) in list3" :key="index" style="margin: 10px 0;width:600px;height:50px">
                  {{ item.index }} 、{{item.name}}
                </el-card>
              </xdh-scroll>
            </el-tab-pane>
            <el-tab-pane label="2016" name="third">
              <xdh-scroll :on-reach-bottom="handleReachBottom">
                <el-card v-for="(item, index) in list4" :key="index" style="margin: 10px 0;width:600px;height:50px">
                  {{ item.index }} 、{{item.name}}
                </el-card>
              </xdh-scroll>
            </el-tab-pane>
            <el-tab-pane label="2015" name="fourth">
              <xdh-scroll :on-reach-bottom="handleReachBottom">
                <el-card v-for="(item, index) in list5" :key="index" style="margin: 10px 0;width:600px;height:50px">
                  {{ item.index }} 、{{item.name}}
                </el-card>
              </xdh-scroll>
            </el-tab-pane>
         </el-tabs>
         <div style="float:right;background:red;width:600px;height:800px">
              <div id="chart1" style='width:320px;height:400px;margin-right:400px'></div>
         </div>
        
    </el-card>
</div>
</template>
<script>
    export default {
        data () {
            return {
                activeName: 'first',
                list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list2:[
                    {
                        index:"1",
                        name:'成龙'
                    },
                    {
                        index:"2",
                        name:'周润发'
                    },
                    {
                        index:'3',
                        name:'刘德华'
                    },
                     {
                        index:"4",
                        name:'邓超'
                    },
                    {
                        index:"5",
                        name:'黄渤'
                    },
                    {
                        index:'6',
                        name:'陈坤'
                    },
                     {
                        index:"7",
                        name:'彭于晏'
                    },
                    {
                        index:"8",
                        name:'甑子丹'
                    },
                    {
                        index:'9',
                        name:'吴京'
                    },
                    {
                        index:'10',
                        name:'葛优'
                    }
                    
                ],
                  list3:[
                {
                  index:"1",
                  name:'吴京'
                },
                {
                  index:"2",
                  name:'黄渤'
                },
                {
                  index:'3',
                  name:'胡歌'
                },
                {
                  index:"4",
                  name:'徐峥'
                },
                {
                  index:"5",
                  name:'周杰伦'
                },
                {
                  index:'6',
                  name:'沈腾'
                },
                {
                  index:"7",
                  name:'周冬雨'
                },
                {
                  index:"8",
                  name:'易烊千玺'
                },
                {
                  index:'9',
                  name:'杨幂'
                },
                {
                  index:'10',
                  name:'吴亦凡'
                }

              ],
              list4:[
                {
                  index:"1",
                  name:'范冰冰'
                },
                {
                  index:"2",
                  name:'鹿晗'
                },
                {
                  index:'3',
                  name:'杨幂'
                },
                {
                  index:"4",
                  name:'赵丽颖'
                },
                {
                  index:"5",
                  name:'杨洋'
                },
                {
                  index:'6',
                  name:'刘涛'
                },
                {
                  index:"7",
                  name:'成龙'
                },
                {
                  index:"8",
                  name:'杨颖'
                },
                {
                  index:'9',
                  name:'周杰伦'
                },
                {
                  index:'10',
                  name:'吴亦凡'
                }

              ],
              list5:[
                {
                  index:"1",
                  name:'范冰冰'
                },
                {
                  index:"2",
                  name:'周杰伦'
                },
                {
                  index:'3',
                  name:'谢霆锋'
                },
                {
                  index:"4",
                  name:'成龙'
                },
                {
                  index:"5",
                  name:'黄晓明'
                },
                {
                  index:'6',
                  name:'孙丽'
                },
                {
                  index:"7",
                  name:'赵薇'
                },
                {
                  index:"8",
                  name:'刘德华'
                },
                {
                  index:'9',
                  name:'李易峰'
                },
                {
                  index:'10',
                  name:'陈奕迅'
                }

              ]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list1[this.list1.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.list1.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            }
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

            Chart1.setOption(option);
            //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            window.addEventListener('resize',function() {myChart.resize()});

        }
    }
</script>
