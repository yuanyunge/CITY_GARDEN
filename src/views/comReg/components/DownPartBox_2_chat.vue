<template>
  <div ref="DownPartBox_chat" class="DownPartBox_chat" />
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      pieChart: null,
      pieChartOptions: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.pieChart = echarts.init(this.$refs.DownPartBox_chat);
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
        series: [{
          name: '高风险',
          type: 'pie',
          radius: ['30%', '50%'],
          center: ['50%', '50%'],
          label: {
            show: true,
            color: '#fff',
            fontSize: '13px',
            formatter: [
              '{b}',
              '{c}家'
            ].join('\n')
          },
          data: [{
            value: 51,
            name: '莲都区'
          },
          {
            value: 2,
            name: '开发区'
          },
          {
            value: 5,
            name: '龙泉市'
          },
          {
            value: 4,
            name: '青田县'
          },
          {
            value: 1,
            name: '云和县'
          },
          {
            value: 8,
            name: '缙云县'
          },
          {
            value: 3,
            name: '遂昌县'
          },
          {
            value: 5,
            name: '松阳县'
          },
          {
            value: 5,
            name: '景宁县'
          }
          ],
          color: ['#20DBEE', '#42E1A5', '#EB4E29', '#42E1A6', '#FAED3B', '#3271FF', '#D964FE', '#D1D1D1', '#ffffff']
        }]
      };
      this.pieChart.setOption(this.pieChartOptions);
    }
  }
};
</script>

<style lang="scss" scoped>
  .DownPartBox_chat{
    width:100%;
    height:100%;
  }
</style>
