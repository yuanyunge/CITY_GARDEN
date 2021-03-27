<template>
  <div class="bottomBox2_1_chart">
    <div id="bottomBox2_1_chart" ref="bottomBox2_1_chart"></div>
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
          label: "市级",
          value: 1,
        },
        {
          label: "县级",
          value: 2,
        },
      ],
      chartOptions: {},
      bar3dChart: null,
      barChartDataOfLevel1: [75, 90, 90],
      barChartDataOfLevel2: [28, 25, 29],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.bar3dChart = echarts.init(this.$refs.bottomBox2_1_chart);
      this.bar3dChart.showLoading({
        color: "#fff",
        maskColor: "rgba(0, 0, 0, 0)",
        zlevel: 0,
      });
      this.initChartFn();
      const resizeFun = window.onresize || function () {};
      window.onresize = () => {
        resizeFun();
        this.bar3dChart.resize();
      };
    });
  },
  methods: {
    initChartFn: function () {
      this.bar3dChart.hideLoading();
      this.chartOptions = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
          formatter: function (param) {
            console.log(param);
            return (
              "<b>" +
              param[0].name +
              "</b>" +
              "<br>" +
              param[0].seriesName +
              ":" +
              param[0].value 
              
            );
          },
        },
        grid: {
          top: "8%",
          left: "0",
          right: "10px",
          bottom: "10px",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["2018", "2019", "2020"],
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              color: "#fff",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 100,
            interval:25,
            axisLabel: {
              formatter: "{value}%",
              color: "#fff",
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
        ],
        series: [
          {
            // 柱底圆片
            name: "省",
            type: "pictorialBar",
            symbolSize: [20, 10], // 调整截面形状
            symbolOffset: [0, 5],
            z: 5,
            itemStyle: {
              normal: {
                color: "rgba(32, 219, 238, 0.4)",
                opacity: 0.8,
              },
            },
            data: this.barChartDataOfLevel1,
          },
          // 柱体
          {
            name: "省",
            type: "bar",
            barGap: "0%",
            barWidth: 20, // 柱体宽度
            itemStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  type: "linear",
                  global: false,
                  colorStops: [
                    {
                      // 第一节下面
                      offset: 0,
                      color: "#22ECF8",
                    },
                    {
                      offset: 1,
                      color: "rgba(32, 232, 244, 0.35)",
                    },
                  ],
                },
              },
            },
            label: {
              show: false,
              position: "top",
              formatter: "{c}%",
              color: "#fff",
            },
            data: this.barChartDataOfLevel1,
            markLine: {
              symbol: "none", //去掉警戒线最后面的箭头
              
              data: [
                {
                  silent: false, //鼠标悬停事件  true没有，false有
                  lineStyle: {
                    //警戒线的样式  ，虚实  颜色
                    type: "solid",
                    color: "#F3921F",
                    opacity:0.6
                  },
                  name: "达标线",
                  label:{
                      show:false
                  },
                  yAxis: 99,
                },
              ],
            },
          },
          // 柱顶圆片
          {
            name: "省",
            type: "pictorialBar",
            symbolSize: [20, 10], // 调整截面形状[宽, 高]
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              normal: {
                color: "#21F3FF",
              },
            },
            data: this.barChartDataOfLevel1,
          },
          
        ],
      };
      this.bar3dChart.setOption(this.chartOptions);
    },
  },
};
</script>
<style lang="scss" scoped>
.bottomBox2_1_chart {
  width: 100%;
  height: 120px;
  &>div{
      width:100%;
      height:100%;
  }
}
</style>