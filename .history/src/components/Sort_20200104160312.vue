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
var bgColor = '#2E2733';

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
        }, {
            name: '4☆',
            children: [{
                name: '安魂曲'
            }, {
                name: '人生拼图版'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '比起爱你，我更需要你'
            }]
        }]
    }]
}, {
    name: '非虚构',
    itemStyle: {
        color: colors[2]
    },
    children: [{
        name: '设计',
        children: [{
            name: '5☆',
            children: [{
                name: '无界面交互'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '数字绘图的光照与渲染技术'
            }, {
                name: '日本建筑解剖书'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '奇幻世界艺术\n&RPG地图绘制讲座'
            }]
        }]
    }, {
        name: '社科',
        children: [{
            name: '5☆',
            children: [{
                name: '痛点'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '卓有成效的管理者'
            }, {
                name: '进化'
            }, {
                name: '后物欲时代的来临',
            }]
        }, {
            name: '3☆',
            children: [{
                name: '疯癫与文明'
            }]
        }]
    }, {
        name: '心理',
        children: [{
            name: '5☆',
            children: [{
                name: '我们时代的神经症人格'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '皮格马利翁效应'
            }, {
                name: '受伤的人'
            }]
        }, {
            name: '3☆',
        }, {
            name: '2☆',
            children: [{
                name: '迷恋'
            }]
        }]
    }, {
        name: '居家',
        children: [{
            name: '4☆',
            children: [{
                name: '把房子住成家'
            }, {
                name: '只过必要生活'
            }, {
                name: '北欧简约风格'
            }]
        }]
    }, {
        name: '绘本',
        children: [{
            name: '5☆',
            children: [{
                name: '设计诗'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '假如生活糊弄了你'
            }, {
                name: '博物学家的神秘动物图鉴'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '方向'
            }]
        }]
    }, {
        name: '哲学',
        children: [{
            name: '4☆',
            children: [{
                name: '人生的智慧'
            }]
        }]
    }, {
        name: '技术',
        children: [{
            name: '5☆',
            children: [{
                name: '代码整洁之道'
            }]
        }, {
            name: '4☆',
            children: [{
                name: 'Three.js 开发指南'
            }]
        }]
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
    backgroundColor: bgColor,
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
