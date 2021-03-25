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
      linebarChartOptions: {},
      bardata: [8, 5, 6, 9, 7, 10, 5]
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

          },
          formatter: function(param) {
            console.log(param);
            return '<b>' + param[0].name + '</b>' + '<br>' + param[0].seriesName + ':' + param[0].value + '<br>' +
            param[3].seriesName + ':' + param[0].value;
          }
        },
        grid: {
          top: '30px',
          left: '0',
          right: '10px',
          bottom: '10px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['3月8日', '3月9日', '3月10日', '3月11日', '3月12日', '3月13日', '3月14日'],
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
            name: '新增(例)',
            nameTextStyle: {
              color: '#fff',
              align: 'center'
            },
            min: 0,
            max: 15,
            interval: 2,
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
            name: '累计(例)',
            nameTextStyle: {
              color: '#fff',
              align: 'center'
            },
            min: 5000,
            max: 5200,
            interval: 40,
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
          // {
          //   name: '新增',
          //   type: 'bar',
          //   data: [26, 35, 20, 45, 46, 25, 28],
          //   itemStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //         offset: 0, color: 'rgba(64, 217, 161, 0.35)' // 0% 处的颜色
          //       }, {
          //         offset: 1, color: '#42E1A6' // 100% 处的颜色
          //       }],
          //       global: false
          //     }
          //   }
          // },
          { // 柱底圆片
            name: '新增',
            type: 'pictorialBar',
            symbolSize: [20, 10], // 调整截面形状
            symbolOffset: [0, 5],
            z: 5,
            itemStyle: {
              'normal': {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(66, 225, 166, 0.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(66, 225, 166, 0.6)'
                }
                ])
              }
            },
            data: this.bardata
          },

          // 柱体
          {
            name: '',
            type: 'bar',
            barGap: '0%',
            barWidth: 20, // 柱体宽度
            itemStyle: {
              'normal': {
                'color': {
                  'x': 0,
                  'y': 0,
                  'x2': 0,
                  'y2': 1,
                  'type': 'linear',
                  'global': false,
                  'colorStops': [{ // 第一节下面
                    'offset': 0,
                    'color': '#42E1A6'
                  }, {
                    'offset': 1,
                    'color': 'rgba(64, 217, 161, 0.35)'
                  }]
                }
              }
            },

            data: this.bardata
          },

          // 柱顶圆片
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10], // 调整截面形状[宽, 高]
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: 'end',
            'itemStyle': {
              'normal': {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                  [{
                    offset: 0,
                    color: '#51EEB4'
                  },
                  {
                    offset: 1,
                    color: '#51EEB4'
                  }
                  ],
                  false
                )
              }
            },
            data: this.bardata
          },
          {
            name: '累计',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            itemStyle: {
              color: 'rgba(243, 146, 31, 1)',
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
                  offset: 0, color: 'rgba(243, 146, 31, 1)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'transparent' // 100% 处的颜色
                }],
                global: false
              }
            },
            data: [5099, 5104, 5110, 5119, 5126, 5136, 5141]
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
