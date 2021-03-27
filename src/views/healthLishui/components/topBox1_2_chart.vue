<template>
  <div class="reportChartContent">
    <div id="topPart_1_chart" ref="topPart_1_chart" class="topPart_1_chart" />
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
      topBarChart: null,
      barChartDataOfLevel1: [30, 28, 25],
      barChartDataOfLevel2: [28, 25, 29],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.topBarChart = echarts.init(this.$refs.topPart_1_chart);
      this.topBarChart.showLoading({
        color: "#fff",
        maskColor: "rgba(0, 0, 0, 0)",
        zlevel: 0,
      });
      this.initChartFn();
      const resizeFun = window.onresize || function () {};
      window.onresize = () => {
        resizeFun();
        this.topBarChart.resize();
      };
    });
  },
  methods: {
    initChartFn: function () {
      this.topBarChart.hideLoading();
      this.chartOptions = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "0px",
          left: "0",
          right: "30px",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          min: 0,
          max: 100,
          name: "%",
          nameLocation:'end',
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
          type: "category",
          data: [2018, 2019, 2020],
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
        },
        series: [
          {
            name: "省",
            type: "bar",
            barWidth: 8,
            data: [92, 89, 84],
            itemStyle: {
              normal: {
                color: "#F3921F",
              },
            },
          },
          {
            name: "市",
            type: "bar",
            barWidth: 8,
            itemStyle: {
              normal: {
                color: "#20DBEE",
              },
            },
            data: [88, 82, 83],
          },
        ],
      };
      this.topBarChart.setOption(this.chartOptions);
    },
  },
};
</script>
<style lang="scss" scoped>
.reportChartContent {
  width: 100%;
  height: 125px;
  .topPart_1_chart {
    width: 100%;
    height: 100%;
  }
}
</style>