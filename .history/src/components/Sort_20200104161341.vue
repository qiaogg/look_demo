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
         <div style="float:right;width:600px;height:800px">
              <div id="chart1" style='width:600px;height:800px;margin-right:400px'></div>
         </div>
        
    </el-card>
</div>
</template>
<script>
 import echarts from 'echarts'
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
            var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
            var bgColor = '#000000';

            var itemStyle = {
                star5: {
                    color: colors[0]
                },
                star4: {
                    color: colors[1]
                },
                star3: {
                    color: colors[2]
                },
                star2: {
                    color: colors[3]
                }
            };

            var data = [{
                name: '2015',
                itemStyle: {
                    color: colors[1]
                },
                children: [{
                    name: '前五',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '范冰冰'
                        }, {
                            name: '周杰伦'
                        }, {
                            name: '谢霆锋'
                        }, {
                            name: '成龙'
                        }, {
                            name: '黄晓明'
                        }]
                    },]
                }, {
                    name: '后五名',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '孙俪'
                        }, {
                            name: '赵薇'
                        }, {
                            name: '刘德华'
                        }, {
                            name: '李易峰'
                        }, {
                            name: '陈奕迅'
                        }]
                    },]
                }]

            },
            {
                name: '2016',
                itemStyle: {
                    color: colors[1]
                },
                children: [{
                    name: '前五',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '范冰冰'
                        }, {
                            name: '鹿晗'
                        }, {
                            name: '杨幂'
                        }, {
                            name: '赵丽颖'
                        }, {
                            name: '杨洋'
                        }]
                    },]
                }, {
                    name: '后五名',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '刘涛'
                        }, {
                            name: '成龙'
                        }, {
                            name: '周杰伦'
                        }, {
                            name: '吴亦凡'
                        }, {
                            name: '陈奕迅'
                        }]
                    },]
                }]

            },
            {
                name: '2017',
                itemStyle: {
                    color: colors[1]
                },
                children: [{
                    name: '前五',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '吴京'
                        }, {
                            name: '黄渤'
                        }, {
                            name: '胡歌'
                        }, {
                            name: '徐峥'
                        }, {
                            name: '周杰伦'
                        }]
                    },]
                }, {
                    name: '后五名',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '沈腾'
                        }, {
                            name: '周冬雨'
                        }, {
                            name: '易烊千玺'
                        }, {
                            name: '杨幂'
                        }, {
                            name: '吴亦凡'
                        }]
                    },]
                }]

            },
            {
                name: '2018',
                itemStyle: {
                    color: colors[1]
                },
                children: [{
                    name: '前五',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '成龙'
                        }, {
                            name: '周润发'
                        }, {
                            name: '刘德华'
                        }, {
                            name: '邓超'
                        }, {
                            name: '黄渤'
                        }]
                    },]
                }, {
                    name: '后五名',
                    children: [{
                        name: '5☆',
                        children: [{
                            name: '陈坤'
                        }, {
                            name: '彭于晏'
                        }, {
                            name: '甑子丹'
                        }, {
                            name: '吴京'
                        }, {
                            name: '葛优'
                        }]
                    },]
                }]

            }];

            for (var j = 0; j < data.length; ++j) {
                var level1 = data[j].children;
                for (var i = 0; i < level1.length; ++i) {
                    var block = level1[i].children;
                    var bookScore = [];
                    var bookScoreId;
                    for (var star = 0; star < block.length; ++star) {
                        var style = (function (name) {
                            switch (name) {
                                case '5☆':
                                    bookScoreId = 0;
                                    return itemStyle.star5;
                                case '4☆':
                                    bookScoreId = 1;
                                    return itemStyle.star4;
                                case '3☆':
                                    bookScoreId = 2;
                                    return itemStyle.star3;
                                case '2☆':
                                    bookScoreId = 3;
                                    return itemStyle.star2;
                            }
                        })(block[star].name);

                        block[star].label = {
                            color: style.color,
                            downplay: {
                                opacity: 0.5
                            }
                        };

                        if (block[star].children) {
                            style = {
                                opacity: 1,
                                color: style.color
                            };
                            block[star].children.forEach(function (book) {
                                book.value = 1;
                                book.itemStyle = style;

                                book.label = {
                                    color: style.color
                                };

                                var value = 1;
                                if (bookScoreId === 0 || bookScoreId === 3) {
                                    value = 5;
                                }

                                if (bookScore[bookScoreId]) {
                                    bookScore[bookScoreId].value += value;
                                }
                                else {
                                    bookScore[bookScoreId] = {
                                        color: colors[bookScoreId],
                                        value: value
                                    };
                                }
                            });
                        }
                    }

                    level1[i].itemStyle = {
                        color: data[j].itemStyle.color
                    };
                }
            }

            let option = {
                backgroundColor: '#DCDFE6',
                color: colors,
                series: [{
                    type: 'sunburst',
                    center: ['50%', '48%'],
                    data: data,
                    sort: function (a, b) {
                        if (a.depth === 1) {
                            return b.getValue() - a.getValue();
                        }
                        else {
                            return a.dataIndex - b.dataIndex;
                        }
                    },
                    label: {
                        rotate: 'radial',
                        color: bgColor
                    },
                    itemStyle: {
                        borderColor: bgColor,
                        borderWidth: 2
                    },
                    levels: [{}, {
                        r0: 0,
                        r: 40,
                        label: {
                            rotate: 0
                        }
                    }, {
                        r0: 40,
                        r: 105
                    }, {
                        r0: 115,
                        r: 140,
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: colors[2],
                            color: 'transparent'
                        },
                        label: {
                            rotate: 'tangential',
                            fontSize: 10,
                            color: colors[0]
                        }
                    }, {
                        r0: 140,
                        r: 145,
                        itemStyle: {
                            shadowBlur: 80,
                            shadowColor: colors[0]
                        },
                        label: {
                            position: 'outside',
                            textShadowBlur: 5,
                            textShadowColor: '#333',
                        },
                        downplay: {
                            label: {
                                opacity: 0.5
                            }
                        }
                    }]
                }]
            };


            Chart1.setOption(option);
            //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            window.addEventListener('resize',function() {myChart.resize()});

        }
    }
</script>
