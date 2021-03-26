<template>
  <div class="upPartBox_1_chart ">
    <div class="chart_top_legend clearfix">
      <div class="legend_title">医疗服务收入占比</div>
      <div class="legend_options">
        <el-select v-model="level" placeholder="请选择" class="chart_options" popper-class="chart_options_dropdown">
          <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div id="upPartchartContainer1" ref="upPartchartContainer1" class="upPartchartContainer" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      level: 1,
      levelOptions: [{
        label: '市级',
        value: 1
      }, {
        label: '县级',
        value: 2
      }],
      chartOptions: {},
      bar3dChart: null,
      barChartDataOfLevel1: [30, 28, 25],
      barChartDataOfLevel2: [28, 25, 29]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.bar3dChart = echarts.init(this.$refs.upPartchartContainer1);
      this.bar3dChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initChartFn();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.bar3dChart.resize();
      };
    });
  },
  methods: {
    initChartFn: function() {
      this.bar3dChart.hideLoading();
      this.chartOptions = {
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
              param[3].seriesName + ':' + param[3].value;
          }
        },
        grid: {
          top: '30px',
          left: '0',
          right: '10px',
          bottom: '10px',
          containLabel: true
        },
        legend: {
          left: '10px',
          align: 'left',
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 20,
          icon: 'rect',
          textStyle: {
            color: '#fff'
          },
          data: ['省', '市']
        },
        xAxis: [{
          type: 'category',
          data: ['2020', '2019', '2018'],
          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            color: '#fff'
          }
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          max: 40,
          interval: 10,
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
        }],
        series: [{ // 柱底圆片
          name: '省',
          type: 'pictorialBar',
          symbolSize: [20, 10], // 调整截面形状
          symbolOffset: [-14, 5],
          z: 5,
          itemStyle: {
            'normal': {
              color: 'rgba(32, 219, 238, 0.4)',
              opacity: 0.8
            }
          },
          data: this.barChartDataOfLevel1
        },
        // 柱体
        {
          name: '省',
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
                  'color': '#22ECF8'
                }, {
                  'offset': 1,
                  'color': 'rgba(32, 232, 244, 0.35)'
                }]
              }
            }
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            color: '#fff'
          },
          data: this.barChartDataOfLevel1
        },
        // 柱顶圆片
        {
          name: '省',
          type: 'pictorialBar',
          symbolSize: [20, 10], // 调整截面形状[宽, 高]
          symbolOffset: [-14, -5],
          z: 12,
          symbolPosition: 'end',
          'itemStyle': {
            'normal': {
              color: '#21F3FF'
            }
          },
          data: this.barChartDataOfLevel1
        },
        { // 柱底圆片
          name: '市',
          type: 'pictorialBar',
          symbolSize: [20, 10], // 调整截面形状
          symbolOffset: [14, 5],
          z: 5,
          itemStyle: {
            'normal': {
              color: 'rgba(243, 146, 31, 0.4)',
              opacity: 0.8
            }
          },
          data: this.barChartDataOfLevel2
        },
        // 柱体
        {
          name: '市',
          type: 'bar',
          barGap: '40%',
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
                  'color': '#F3921F'
                }, {
                  'offset': 1,
                  'color': 'rgba(243, 146, 31, 0.35)'
                }]
              }
            }
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            color: '#fff'
          },

          data: this.barChartDataOfLevel2
        },
        // 柱顶圆片
        {
          name: '市',
          type: 'pictorialBar',
          symbolSize: [20, 10], // 调整截面形状[宽, 高]
          symbolOffset: [14, -5],
          z: 12,
          symbolPosition: 'end',
          'itemStyle': {
            'normal': {
              color: '#F3921F'
            }
          },
          data: this.barChartDataOfLevel2
        }
        ]
      };
      this.bar3dChart.setOption(this.chartOptions);
    }
  }
};
</script>

<style lang="scss" scoped>
.upPartBox_1_chart {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 24px;

  .chart_top_legend {
    position: absolute;
    height: 24px;
    width: 100%;
    top: 0;

    .legend_title {
      float: left;
      padding-left: 9px;
      border-left: 4px solid #20DBEE;
    }

    .legend_options {
      float: right;
      width: 94px;
      height: 24px;

    }
  }

  .upPartchartContainer {
    width: 100%;
    height: 100%;
  }
}
</style>
