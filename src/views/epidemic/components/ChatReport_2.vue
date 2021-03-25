<template>
  <div id="chatReport2" ref="chatReport2" class="main_box_1_chart2" />
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'ChatReport2',
  data() {
    return {
      linebarChart: null,
      linebarChartOptions: {}
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.linebarChart = echarts.init(this.$refs.chatReport2);
      this.linebarChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initLineChart();
    });
  },
  methods: {
    initLineChart() {
      this.linebarChart.hideLoading();
      this.linebarChartOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          top: '10px',
          left: '0',
          right: '0',
          bottom: '10px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              color: '#fff'
            }
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
              formatter: '{value}',
              color: '#fff'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                opacity: 0.2,
                type: 'dashed'
              }
            }
          },
          {
            type: 'value',
            name: '累计(千万)',
            min: 0,
            max: 15,
            interval: 3,
            axisLabel: {
              formatter: '{value}',
              color: '#fff'
            },

            splitLine: {
              show: false,
              lineStyle: {
                color: '#fff',
                opacity: 0.3
              }
            }
          }
        ],
        series: [
          {
            name: '新增',
            type: 'bar',
            data: [26, 35, 20, 45, 46, 25, 28],
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(64, 217, 161, 0.35)' // 0% 处的颜色
                }, {
                  offset: 1, color: '#42E1A6' // 100% 处的颜色
                }],
                global: false
              }
            }
          },
          {
            name: '累计',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            itemStyle: {
              color: '#20DBEE',
              opacity: 0
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#20DBEE' // 0% 处的颜色
                }, {
                  offset: 1, color: 'transparent' // 100% 处的颜色
                }],
                global: false
              }
            },
            data: [11, 10, 11, 12, 11.5, 15, 12]
          }
        ]
      };
      this.linebarChart.setOption(this.linebarChartOptions);
    }

  }
};
</script>

<style lang="scss" scoped>
  .main_box_1_chart2{
    width: 100%;
    height: 100%;
  }
</style>
