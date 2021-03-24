<template>
  <div id="chatReport1" ref="chatReport1"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name:'ChatReport1',
  data(){
    return{
      lineChart:null,
      chartOption:{
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日'],
              axisPointer: {
                  type: 'shadow'
              },
              color:'#FFFFFF'
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '新增(万)',
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                  formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '累计(千万)',
              min: 0,
              max: 15,
              interval: 3,
              axisLabel: {
                  formatter: '{value}'
              }
            }
          ],
          series: [
              {
                name: '新增',
                type: 'bar',
                data: [26, 35, 20, 45, 46, 25, 28]
              },
              {
                name: '累计',
                type: 'line',
                yAxisIndex: 1,
                data: [11, 10, 11, 12, 11.5, 15, 12]
              }
          ]
      }
    }
  },
  mounted(){
    this.$nextTick(function() {
      this.lineChart = echarts.init(this.$refs.chatReport1);
      this.lineChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initLineChart();
    })
  },
  methods:{
    initLineChart(){
      this.lineChart.hideLoading(); 
      this.lineChart.setOption(this.chartOption);
    }
  }
}
</script>

<style lang="scss" scoped>
  #chatReport1{
    width: 100%;
    height: 300px;
  }
</style>
