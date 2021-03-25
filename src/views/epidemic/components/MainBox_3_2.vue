<template>
  <div class="MainBox_3_2">
    <div class="MainBox_3_2-title" />
    <div class="mainBox_3_2_tags">
      <ul class="box_tags_ul clearfix">
        <li class="tagItem1 active">境外入丽人员</li>
        <li class="tagItem2">中高风险入丽人员</li>
        <li class="tagItem3">隔离服务点人员</li>
        <li class="tagItem4">进口冷链食品暴露人员</li>
        <li class="tagItem5">快递外卖从业人员</li>
      </ul>
    </div>
    <div class="mainBox_3_2_charts">
      <div id="recordbarChart" ref="recordbarChart" class="recordbarChart" />
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'MonitorTrend',
  data() {
    return {
      barchartOption: {}
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.barChart = echarts.init(this.$refs.recordbarChart);
      this.barChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initBarChart();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.barChart.resize();
      };
    });
  },
  methods: {
    initBarChart: function() {
      this.barChart.hideLoading();
      this.barchartOption = {
        grid: {
          top: '10px',
          left: '3%',
          right: '4%',
          bottom: '0',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['应检总数', '当日应检数', '当日实检数', '累计检测数'],
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.5
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 2,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#2DBBFA'
            }
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
            length: 2,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              opacity: 0.3
            }
          }
        },
        series: [{
          label: {
            show: true,
            position: 'top',
            color: '#fff'
          },
          data: [{
            value: 2275,
            itemStyle: {
              color: '#42E1A6'
            }
          }, {
            value: 31,
            itemStyle: {
              color: '#F3921F'
            }
          }, {
            value: 31,
            itemStyle: {
              color: '#20DBEE'
            }
          }, {
            value: 2275,
            itemStyle: {
              color: '#3271FF'
            }
          }],
          type: 'bar'
        }]
      };
      this.barChart.setOption(this.barchartOption);
    }
  }
};
</script>
<style lang="scss" scoped>
.MainBox_3_2 {
  width: 583px;
  height: 380px;
  background: url(~@/images/epidemic/jcyj_bg@2x.png) center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 63px 27px 16px 19px;
  position: relative;

  .MainBox_3_2-title {
    position: absolute;
    width: 206px;
    height: 84px;
    background: url(~@/images/epidemic/jcyj_bt@2x.png) center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }

  .mainBox_3_2_tags {
    .box_tags_ul {
      list-style: none;
      margin: 0;
      padding: 0;

      &>li {
        float: left;
        font-size: 16px;
        color: #00E4FF;
        background-image: url(~@/images/epidemic/kqh_bg@2x.png);
        background-size: cover;
        width: 190px;
        height: 50px;
        line-height: 50px;
        opacity: 0.5;
        text-align: center;

        &.tagItem1 {
          background-image: url(~@/images/epidemic/jwrlryqh_bg@2x.png);
          width: 141px;
        }

        &.tagItem2 {
          width: 190px;
        }

        &.tagItem3 {}

        &.tagItem4 {}

        &.tagItem5 {}

        &.active {
          opacity: 1;
        }
      }
    }
  }
  .mainBox_3_2_charts{
    width:100%;
    height:195px;
    margin-top:10px;
    .recordbarChart{
      width:100%;
      height:100%;
    }
  }

}
</style>
