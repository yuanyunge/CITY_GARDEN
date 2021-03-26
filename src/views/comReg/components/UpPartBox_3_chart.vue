<template>
  <div class="uppartBox_3_chart">
    <div class="uppartBox_3_chart_head">
      <div class="legend_title">药品不良反应(单位：人）</div>
      <div class="legend-list">
        <span class="categoryItem1">监测报告例数</span>
        <span class="categoryItem2">每百万人口报告例数</span>
      </div>
    </div>

    <div id="upBox_3_barChart" ref="barchartRender" class="upBox_3_barChart" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'UpboxPieChart',
  data() {
    return {
      barChart: null,
      pieChartOptions: {},
      barChartData1: [997, 81, 313, 94, 142, 295, 164, 122, 41],
      barChartData2: [1860, 337, 875, 817, 1023, 784, 851, 633, 364]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.barChart = echarts.init(this.$refs.barchartRender);
      this.barChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initChartFn();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.barChart.resize();
      };
    });
  },
  methods: {
    initChartFn: function() {
      this.barChart.hideLoading();
      this.pieChartOptions = {
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
          data: ['本市级', '龙泉', '青田', '云和', '庆元', '缙云', '遂昌', '松云', '青宁'],
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
          max: 2500,
          interval: 500,
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
            name: '监测报告例数',
            type: 'bar',
            barGap: '30%',
            barWidth: 15, // 柱体宽度
            itemStyle: {
              'normal': {
                'color': '#20DBEE'
              }
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}',
              color: '#fff'
            },
            data: this.barChartData1
          },

          {
            name: '每百万人口报告例数',
            type: 'bar',
            barGap: '30%',
            barWidth: 15, // 柱体宽度
            itemStyle: {
              'normal': {
                'color': '#F3921F'
              }
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}',
              color: '#fff'
            },

            data: this.barChartData2
          }

        ]
      };
      this.barChart.setOption(this.pieChartOptions);
    }
  }
};
</script>

<style lang="scss" scoped>
.uppartBox_3_chart {
  .uppartBox_3_chart_head{
    position:relative;
    .legend-list{
      position:absolute;
      right:0;
      top:0;
      span{

        &::before{
          content:'';
          display:inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right:10px;
        }
        &.categoryItem1::before{
          background: #20DBEE;
        }
        &.categoryItem2::before{
           background: #F3921F;
        }
        &.categoryItem1{
          margin-right:10px;
        }
      }
    }

  }
  .upBox_3_barChart{
    width:520px;
    height:275px;
  }

}
</style>
