<template>
<div>
<div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
            <span class="el-icon-search"></span>
            明星关系图
        </div>
        <br>
    <el-card style="height:800px;margin-top:40px">
          <el-tabs v-model="activeName" type="card" >
            <el-tab-pane label="2018" name="first">
                <xdh-scroll :on-reach-bottom="handleReachBottom">
                    <el-card v-for="(item, index) in list2" :key="index" style="margin: 10px 0;width:600px;height:50px">
                        {{ item.index }} 、{{item.name}}
                    </el-card>
                </xdh-scroll>
            </el-tab-pane>
            <el-tab-pane label="2017" name="second">
                <xdh-scroll :on-reach-bottom="handleReachBottom">
                    <el-card v-for="(item, index) in list2" :key="index" style="margin: 10px 0;width:600px;height:50px">
                        {{ item.index }} 、{{item.name}}
                    </el-card>
                </xdh-scroll>
            </el-tab-pane>
            <el-tab-pane label="2016" name="third">
                <xdh-scroll :on-reach-bottom="handleReachBottom">
                    <el-card v-for="(item, index) in list2" :key="index" style="margin: 10px 0;width:600px;height:50px">
                        {{ item.index }} 、{{item.name}}
                    </el-card>
                </xdh-scroll>
            </el-tab-pane>
            <el-tab-pane label="2015" name="fourth">
                <xdh-scroll :on-reach-bottom="handleReachBottom">
                    <el-card v-for="(item, index) in list2" :key="index" style="margin: 10px 0;width:600px;height:50px">
                        {{ item.index }} 、{{item.name}}
                    </el-card>
                </xdh-scroll>
            </el-tab-pane>
         </el-tabs>
        
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
                        name:'张杰'
                    },
                    {
                        index:"2",
                        name:'谢娜'
                    },
                    {
                        index:'3',
                        name:'封兴东'
                    },
                     {
                        index:"4",
                        name:'张杰'
                    },
                    {
                        index:"5",
                        name:'谢娜'
                    },
                    {
                        index:'6',
                        name:'封兴东'
                    },
                     {
                        index:"7",
                        name:'张杰'
                    },
                    {
                        index:"8",
                        name:'谢娜'
                    },
                    {
                        index:'9',
                        name:'封兴东'
                    },
                    {
                        index:'10',
                        name:'封兴东'
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
        }
    }
</script>