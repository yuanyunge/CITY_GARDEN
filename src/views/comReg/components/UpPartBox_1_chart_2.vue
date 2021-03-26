<template>
  <div class="upPartBox_1_chart ">
    <div class="chart_top_legend clearfix">
      <div class="legend_title">均次费用(元)
      </div>

      <div class="legend_options">

        <el-select v-model="level" placeholder="请选择" class="chart_options" popper-class="chart_options_dropdown">
          <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <span class="optionTag">门诊</span>
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
      lineChart: null,
      lineDataOfLevel1: [180, 380, 250],
      lineDataOfLevel2: [130, 320, 210]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.lineChart = echarts.init(this.$refs.upPartchartContainer1);
      this.lineChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initChartFn();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.lineChart.resize();
      };
    });
  },
  methods: {
    initChartFn: function() {
      this.lineChart.hideLoading();
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
              param[1].seriesName + ':' + param[1].value;
          }
        },
        grid: {
          top: '30px',
          left: '0',
          right: '10px',
          bottom: '10px',
          containLabel: true
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
          max: 400,
          interval: 100,
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
        series: [

          {
            name: '省',
            type: 'line',
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
                  offset: 0,
                  color: '#20DBEE' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'transparent' // 100% 处的颜色
                }],
                global: false
              }
            },
            data: this.lineDataOfLevel1
          },
          {
            name: '市',
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#F3921F',
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
                  offset: 0,
                  color: '#F3921F' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'transparent' // 100% 处的颜色
                }],
                global: false
              }
            },
            data: this.lineDataOfLevel2
          }
        ]
      };
      this.lineChart.setOption(this.chartOptions);
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

    .optionTag {
      float: right;
      color:#42E1A6;
      margin-right:14px;
      line-height:24px;
      font-size: 16px;
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
