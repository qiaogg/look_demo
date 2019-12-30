<template>
    <div>
        <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
            <span class="el-icon-search"></span>
            明星关系图
        </div>
        <br>
        <el-card style="margin-top:40px">
            <div id="echarts" />
        </el-card>
    </div>
</template>

<script>
import { drawChart } from '@/assets/js/RelationGraph'
export default {
  name: 'RelationGraph',
  data () {
    return {
        dataInput: {
            style: {
              height: 800 //canvas高度
            },
            node: [
               {
                    name: '林志玲',
                    category: '女性'
                }, {
                    name: '周杰伦',
                    category: '男性',
                }, {
                    name: '孙怡',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '马天宇',
                    category: '男性'
                }, {
                    name: '王源',
                    category: '男性',
                }, {
                    name: '张艺兴',
                    category: '男性',
                    draggable: false  //可特殊添加
                },{
                    name: '何炅',
                    category: '男性'
                }, {
                    name: '张大大',
                    category: '男性',
                }, {
                    name: '谭维维',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: 'Angelababy',
                    category: '女性'
                }, {
                    name: '赵韩樱子',
                    category: '男性',
                }, {
                    name: '李宇春',
                    category: '女性',
                    draggable: false  //可特殊添加
                },{
                    name: '刘涛',
                    category: '女性'
                }, {
                    name: '王子文',
                    category: '男性',
                }, {
                    name: '徐熙娣',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '杨幂',
                    category: '女性'
                }, {
                    name: '范冰冰',
                    category: '女性',
                }, {
                    name: '李治廷',
                    category: '男性',
                    draggable: false  //可特殊添加
                },{
                    name: '马思纯',
                    category: '女性'
                }, {
                    name: '古力娜扎',
                    category: '女性',
                }, {
                    name: '井柏然',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '江疏影',
                    category: '女性'
                }, {
                    name: '经纪人甲',
                    category: '非重要人物',
                }, {
                    name: '经纪人乙',
                    category: '非重要人物',
                    draggable: false  //可特殊添加
                }, {
                    name: '经纪人丙',
                    category: '非重要人物'
                }, {
                    name: '经纪人丁',
                    category: '非重要人物',
                }, {
                    name: '经纪人戊',
                    category: '非重要人物',
                    draggable: false  //可特殊添加
                }, {
                    name: '经纪人已',
                    category: '非重要人物'
                }, {
                    name: '汤唯',
                    category: '女性',
                }, {
                    name: '林心如',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '谢娜',
                    category: '女性'
                }, {
                    name: '章子怡',
                    category: '女性',
                }, {
                    name: '沈腾',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '汪峰',
                    category: '男性'
                }, {
                    name: '冯绍峰',
                    category: '男性',
                }, {
                    name: '金星',
                    category: '女性',
                    draggable: false  //可特殊添加
                },{
                    name: '陈道明',
                    category: '男性'
                }, {
                    name: '陈希妍',
                    category: '男性',
                }, {
                    name: '刘亦菲',
                    category: '男',
                    draggable: false  //可特殊添加
                }, {
                    name: '陈赫',
                    category: '男性'
                }, {
                    name: '林丹',
                    category: '男性',
                }, {
                    name: '周冬雨',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '岳云鹏',
                    category: '男性'
                }, {
                    name: '海清',
                    category: '女性',
                }, {
                    name: '张艺谋',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '朗朗',
                    category: '男性'
                }, {
                    name: '张涵予',
                    category: '女性',
                }, {
                    name: '王凯',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '李晨',
                    category: '男性'
                }, {
                    name: '张一山',
                    category: '男性',
                }, {
                    name: '薛之谦',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '佟大为',
                    category: '男性'
                }, {
                    name: '景甜',
                    category: '女性',
                }, {
                    name: '莫文蔚',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '彭于晏',
                    category: '男性'
                }, {
                    name: '刘雯',
                    category: '女性',
                }, {
                    name: '黄子韬',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '佟丽娅',
                    category: '女性'
                }, {
                    name: '赵又廷',
                    category: '男性',
                }, {
                    name: '张杰',
                    category: '男性',
                    draggable: false  //可特殊添加
                },{
                    name: '吴奇隆',
                    category: '男性'
                }, {
                    name: '白百何',
                    category: '女性',
                }, {
                    name: '冯小刚',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '徐峥',
                    category: '男性'
                }, {
                    name: '王宝强',
                    category: '男性',
                }, {
                    name: '刘嘉玲',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '罗志祥',
                    category: '男性'
                }, {
                    name: '林更新',
                    category: '男性',
                }, {
                    name: '汪涵',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '蒋欣',
                    category: '女性'
                }, {
                    name: '陈伟霆',
                    category: '男性',
                }, {
                    name: '陆毅',
                    category: '男性',
                    draggable: false  //可特殊添加
                },
                {
                    name: '梁朝伟',
                    category: '男性'
                }, {
                    name: '韩寒',
                    category: '男性',
                }, {
                    name: '张国立',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '张惠妹',
                    category: '女性'
                }, {
                    name: '赵薇',
                    category: '女性',
                }, {
                    name: '刘诗诗',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '黄磊',
                    category: '男性'
                }, {
                    name: '唐嫣',
                    category: '女性',
                }, {
                    name: '孙红雷',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '蔡依林',
                    category: '女性'
                }, {
                    name: '张艺',
                    category: '女性',
                },{
                    name: '刘恺威',
                    category: '男性',
                    draggable: false  //可特殊添加
                },{
                    name: '郭富城',
                    category: '男性'
                }, {
                    name: '霍建华',
                    category: '男性',
                }, {
                    name: '谢霆锋',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '张嘉译',
                    category: '男性'
                }, {
                    name: '吴秀波',
                    category: '男性',
                }, {
                    name: '陈乔恩',
                    category: '女性',
                    draggable: false  //可特殊添加
                }, {
                    name: '陈奕迅',
                    category: '男性'
                }, {
                    name: '黄渤',
                    category: '男性',
                }, {
                    name: '郭德纲',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '古天乐',
                    category: '男性'
                }, {
                    name: '甄子丹',
                    category: '男性',
                }, {
                    name: '钟汉良',
                    category: '男性',
                    draggable: false  //可特殊添加
                },
                {
                    name: '王菲',
                    category: '女性'
                }, {
                    name: '陈坤',
                    category: '男性',
                }, {
                    name: '邓超',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: '张学友',
                    category: '男性'
                }, {
                    name: '刘德华',
                    category: '男性',
                }, {
                    name: '胡歌',
                    category: '男性',
                    draggable: false  //可特殊添加
                }, {
                    name: 'xxx家人',
                    category: '非重要人物'
                }, {
                    name: 'xx家人',
                    category: '非重要人物',
                }, {
                    name: 'xx的家人',
                    category: '非重要人物',
                    draggable: false  //可特殊添加
                }, {
                    name: 'xxx的家人',
                    category: '非重要人物'
                }, {
                    name: 'x家人',
                    category: '非重要人物',
                }, {
                    name: 'x的家人',
                    category: '非重要人物',
                    draggable: false  //可特殊添加
                },{
                    name: 'xxxx家人',
                    category: '非重要人物'
                }, 
            ],
            relation: [
                {
                    source: 0,
                    target: 100,
                    value: 'family',
                    symbol: ['none','arrow']
                },
                {
                    source: 0,
                    target: 87,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 0,  
                    target: 44,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 0,
                    target: 30,
                    value: 'family'
                }, {
                    source: 1,
                    target: 87,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 1,
                    target: 55,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 1,
                    target: 43,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 1,
                    target: 40,
                    value: 'social'
                }, {
                    source: 1,
                    target: 18,
                    value: 'social',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 1,
                    target: 9,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 2,
                    target: 38,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 3,
                    target: 31,
                    value: 'social'
                }, {
                    source: 3,
                    target: 27,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },{
                    source: 4,
                    target: 89,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 4,
                    target: 64,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 4,
                    target: 51,
                    value: 'family'
                }, {
                    source: 4,
                    target: 38,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 4,
                    target: 23,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                {
                    source: 5,
                    target: 101,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 5,
                    target: 57,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 5,
                    target: 25,
                    value: 'social'
                }, {
                    source: 6,
                    target: 79,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 6,
                    target: 68,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 6,
                    target: 18,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 7,
                    target: 62,
                    value: 'social'
                }, {
                    source: 7,
                    target: 34,
                    value: 'social',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 7,
                    target: 13,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 9,
                    target: 18,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 9,
                    target: 11,
                    value: 'family'
                }, {
                    source: 10,
                    target: 80,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },{
                    source: 10,
                    target: 22,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source:11,
                    target: 18,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 12,
                    target: "66",
                    value: 'family'
                }, {
                    source: 12,
                    target: 45,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 12,
                    target: 40,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                {
                    source: 12,
                    target: 34,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 12,
                    target: 23,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 13,
                    target: 32,
                    value: 'social'
                }, {
                    source: 14,
                    target: 78,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 14,
                    target: 62,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 15,
                    target: 102,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 15,
                    target: 76,
                    value: 'social'
                }, {
                    source:15,
                    target: 74,
                    value: 'family',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 16,
                    target: 38,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 16,
                    target: 37,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 17,
                    target: 67,
                    value: 'social'
                }, {
                    source: 17,
                    target: 64,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },{
                    source: 17,
                    target: 23,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 18,
                    target: 98,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 18,
                    target: 73,
                    value: 'social'
                }, {
                    source: 19,
                    target: 72,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 19,
                    target: 41,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                {
                    source: 20,
                    target: 91,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 20,
                    target: 78,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 20,
                    target: 5,
                    value: '朋友'
                }, {
                    source: 21,
                    target: 29,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 2,
                    target: 82,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 23,
                    target: 73,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 23,
                    target: 59,
                    value: '朋友'
                }, {
                    source: 23,
                    target: 27,
                    value: '同学',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 24,
                    target: 107,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 24,
                    target: 87,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 24,
                    target: 41,
                    value: '朋友'
                }, {
                    source: 25,
                    target: 55,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },{
                    source: 25,
                    target: 28,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 26,
                    target: 106,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 26,
                    target: 87,
                    value: '朋友'
                }, {
                    source: 26,
                    target: 38,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 27,
                    target: 94,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },
                //下面没有输
                {
                    source: 0,
                    target: 100,
                    value: 'family',
                    symbol: ['none','arrow']
                },
                {
                    source: 0,
                    target: 87,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 0,  
                    target: 44,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 0,
                    target: 30,
                    value: 'family'
                }, {
                    source: 1,
                    target: 87,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 1,
                    target: 55,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 1,
                    target: 43,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 1,
                    target: 40,
                    value: 'social'
                }, {
                    source: 1,
                    target: 18,
                    value: 'social',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 1,
                    target: 9,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 2,
                    target: 38,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 3,
                    target: 31,
                    value: 'social'
                }, {
                    source: 3,
                    target: 27,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },{
                    source: 4,
                    target: 89,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 4,
                    target: 64,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 4,
                    target: 51,
                    value: 'family'
                }, {
                    source: 4,
                    target: 38,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 4,
                    target: 23,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                {
                    source: 5,
                    target: 101,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 5,
                    target: 57,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 5,
                    target: 25,
                    value: 'social'
                }, {
                    source: 6,
                    target: 79,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 6,
                    target: 68,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 6,
                    target: 18,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 7,
                    target: 62,
                    value: 'social'
                }, {
                    source: 7,
                    target: 34,
                    value: 'social',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 7,
                    target: 13,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 9,
                    target: 18,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 9,
                    target: 11,
                    value: 'family'
                }, {
                    source: 10,
                    target: 80,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },{
                    source: 10,
                    target: 22,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source:11,
                    target: 18,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 12,
                    target: "66",
                    value: 'family'
                }, {
                    source: 12,
                    target: 45,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 12,
                    target: 40,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                {
                    source: 12,
                    target: 34,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 12,
                    target: 23,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 13,
                    target: 32,
                    value: 'social'
                }, {
                    source: 14,
                    target: 78,
                    value: 'family',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 14,
                    target: 62,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 15,
                    target: 102,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 15,
                    target: 76,
                    value: 'social'
                }, {
                    source:15,
                    target: 74,
                    value: 'family',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 16,
                    target: 38,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 16,
                    target: 37,
                    value: 'family',
                    symbol: ['none','arrow']
                }, {
                    source: 17,
                    target: 67,
                    value: 'social'
                }, {
                    source: 17,
                    target: 64,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },{
                    source: 17,
                    target: 23,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 18,
                    target: 98,
                    value: 'social',
                    symbol: ['none','arrow']
                }, {
                    source: 18,
                    target: 73,
                    value: 'social'
                }, {
                    source: 19,
                    target: 72,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 19,
                    target: 41,
                    value: 'social',
                    symbol: ['arrow','arrow']
                },
                {
                    source: 20,
                    target: 91,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 20,
                    target: 78,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 20,
                    target: 5,
                    value: '朋友'
                }, {
                    source: 21,
                    target: 29,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },
                                {
                    source: 2,
                    target: 82,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 23,
                    target: 73,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 23,
                    target: 59,
                    value: '朋友'
                }, {
                    source: 23,
                    target: 27,
                    value: '同学',
                    symbol: ['arrow','arrow']
                } ,{
                    source: 24,
                    target: 107,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 24,
                    target: 87,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 24,
                    target: 41,
                    value: '朋友'
                }, {
                    source: 25,
                    target: 55,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },{
                    source: 25,
                    target: 28,
                    value: '亲戚',
                    symbol: ['none','arrow']
                }, {
                    source: 26,
                    target: 106,
                    value: '妻子',
                    symbol: ['none','arrow']
                }, {
                    source: 26,
                    target: 87,
                    value: '朋友'
                }, {
                    source: 26,
                    target: 38,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },
                 {
                    source: 27,
                    target: 94,
                    value: '同学',
                    symbol: ['arrow','arrow']
                },

            ],
            node_category: [
                {
                    name: '男性',
                    itemStyle: {
                        normal: {
                            color: "#409EFF ",
                        }
                    }
                }, {
                    name: '女性',
                    itemStyle: {
                        normal: {
                            color: "pink",
                        }
                    }
                }, {
                    name: '非重要人物',
                    itemStyle: {
                        normal: {
                            color: "#FFA500",
                        }
                    }
                }
            ],
            relation_category: {
                "social": {
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0,
                            type:'solid', //'solid''dashed''dotted'
                            color: 'rgba(0,0,0,0.6)'
                        },
                        emphasis:{
                            color:'rgba(0,0,0,1)'
                        }
                    }
                    //TODO:可添加 隐藏的hideLineStyle ...
                },
                 "family": {
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0,
                            type:'solid', //'solid''dashed''dotted'
                            color: '#909399'
                        },
                        emphasis:{
                            color:'#409EFF'
                        }
                    }
                    //TODO:可添加 隐藏的hideLineStyle ...
                },
                "丈夫": {
                    lineStyle: {
                        normal: { curveness: 0.4 } //可设置为负值
                    }
                },
                "妻子": {
                    lineStyle: {
                        normal: { curveness: 0}
                    }
                }
                //"同学": {}  不添加则是默认
            },
            legend: ["男性", "女性","非重要人物"] //可部分隐藏,此处省略了非重要人物性别
        }
    }
  },
  mounted () {
    setTimeout( () => {
      drawChart(this.dataInput)
    }, 300)
  },
  methods: {

  }
}
</script>
<style scoped>
</style>
