<template>
  <div class="uppartBox_2_1_chart">
    <div id="upbox_2_1_pie" ref="pieChartrender" class="upbox_2_1_pie" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'UpboxPieChart',
  data() {
    return {
      pieChart: null,
      pieChartOptions: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.pieChart = echarts.init(this.$refs.pieChartrender);
      this.pieChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initChartFn();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.pieChart.resize();
      };
    });
  },
  methods: {
    initChartFn: function() {
      this.pieChart.hideLoading();
      this.pieChartOptions = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: 'left',
          top: '20%',
          textStyle: {
            color: '#fff'
          },
          icon: 'circle',
          itemWidth: 10,
          itemHeight: 10,
          left: '60%'
        },
        series: [{
          name: '卫生人员',
          type: 'pie',
          radius: ['60%', '80%'],
          left: '-50%',
          avoidLabelOverlap: false,
          clockwise: false,
          label: {
            show: true,
            position: 'center',
            color: '#fff',
            fontSize: '16px',
            formatter: [
              '总数',
              '22,902'
            ].join('\n')
          },
          emphasis: {
            scale: false,
            label: {
              show: true
            }
          },
          labelLine: {
            show: false
          },
          data: [{
            value: 12589,
            name: '医院'
          },
          {
            value: 5742,
            name: '基层'
          },
          {
            value: 3427,
            name: '其他'
          }
          ],
          color: ['#20DBEE', '#F3921F', '#3271FF']
        }]
      };
      this.pieChart.setOption(this.pieChartOptions);
    }
  }
};
</script>

<style lang="scss" scoped>
.uppartBox_2_1_chart {
  width: 250px;
  height: 155px;

  div {
    width: 100%;
    height: 100%;
  }
}
</style>
