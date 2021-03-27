<template>
  <div class="reportChartContent">
    <div
      id="topPart_2_chart_1"
      ref="topPart_2_chart_1"
      class="topPart_2_chart"
    />
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      level: 1,
      levelOptions: [
        {
          label: "省",
          value: 1,
        },
        {
          label: "市",
          value: 2,
        },
      ],
      chartOptions: {},
      topLineChart: null,
      lineChartDataOfLevel1: [8, 12, 3.6, 10, 5],
      lineChartDataOfLevel2: [2, 6, 3, 16, 8],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.topLineChart = echarts.init(this.$refs.topPart_2_chart_1);
      this.topLineChart.showLoading({
        color: "#fff",
        maskColor: "rgba(0, 0, 0, 0)",
        zlevel: 0,
      });
      this.initChartFn();
      const resizeFun = window.onresize || function () {};
      window.onresize = () => {
        resizeFun();
        this.topLineChart.resize();
      };
    });
  },
  methods: {
    initChartFn: function () {
      this.topLineChart.hideLoading();
      this.chartOptions = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "35px",
          left: "0",
          right: "30px",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: [2016, 2017, 2018, 2019, 2020],

          axisLabel: {
            formatter: "{value}",
            color: "#fff",
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#fff",
              opacity: 0.2,
              type: "dashed",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              opacity: 0.2,
            },
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: "#fff",
              opacity: 0.2,
            },
          },
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 25,
          name: "%",
          nameLocation: "end",
          axisPointer: {
            type: "shadow",
          },
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              opacity: 0.2,
            },
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: "#fff",
              opacity: 0.2,
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              opacity: 0.2,
              type: "dashed",
            },
          },
        },
        series: [
          {
            name: "省",
            type: "line",
            smooth: true,
            data: this.lineChartDataOfLevel1,
            itemStyle: {
              normal: {
                color: "#F3921F",
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#20DBEE", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(32,219,238,.0)", // 100% 处的颜色
                  },
                ],
                global: false,
              },
            },
            markLine: {
              symbol: "none", //去掉警戒线最后面的箭头
              
              data: [
                {
                  silent: false, //鼠标悬停事件  true没有，false有
                  lineStyle: {
                    //警戒线的样式  ，虚实  颜色
                    type: "solid",
                    color: "#EB4E29",
                    opacity:0.6
                  },
                  name: "警戒线",
                  label:{
                      show:false
                  },
                  yAxis: 22,
                },
              ],
            },
          },
          {
            name: "市",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#20DBEE",
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#FF8A00", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "transparent", // 100% 处的颜色
                  },
                ],
                global: false,
              },
            },
            data: this.lineChartDataOfLevel2,
          },
        ],
      };
      this.topLineChart.setOption(this.chartOptions);
    },
  },
};
</script>
<style lang="scss" scoped>
.reportChartContent {
  width: 100%;
  height: 158px;
  .topPart_2_chart {
    width: 100%;
    height: 100%;
  }
}
</style>