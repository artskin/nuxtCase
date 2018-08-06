<template>
<div>
    <h1>hello {{msg}}</h1>
    <div id="d3svg"></div>
    <div ref='myBox' style="width:300px;height:300px"></div>
    <div id="mychart" v-echarts="lineChartOption" style="width:300px;height:200px"></div>
</div>
    
</template>
<script>

import * as d3 from 'd3';
//import V_Echarts from '../directives/echarts';
import echarts from 'echarts';
//console.log(V_Echarts);

//Vue.component('chart', ECharts)

var _this = this;

export default {
    // directives: {
    //     'echarts': V_Echarts
    // },
    data(){
        return{
            msg:'nuxtjsCase',
            lineChartOption : {
                tooltip : {
                    trigger: 'axis'
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'Num',
                        type:'line',
                        areaStyle: {normal: {}},
                        data: [52, 54, 60, 61, 65, 62, 80, 85, 90, 99, 40, 30, 20, 10, 0]
                    }
                ]
            }
        }
    },
    mounted() {
        this.getSvgDom();
        this.drawEchart();
    },
    methods:{
        getSvgDom(){
            var dom = d3.select('#d3svg').append("svg");
            dom.attr("width","100");
            dom.attr("height","100")
        },
        drawEchart(){
            //console.log(echarts)
            let myChart = echarts.init(this.$refs.myBox);
            myChart.setOption({
                title: { text: 'ECharts 示例' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}

</script>
<style>
#d3svg{border: 1px dashed #c00}
#echart{
    width: 200px;height: 300px;
}
</style>
