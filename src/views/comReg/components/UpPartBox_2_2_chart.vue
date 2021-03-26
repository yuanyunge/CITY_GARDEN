<template>
  <div class="uppartBox2_2_chart_container">
    <div id="upbox_pie3dChart" ref="upboxPie3dChartRender" class="upbox_pie3dChart" />
  </div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-gl';
import { getPie3D } from '@/utils/geo3d';
export default {
  name: 'Pie3dChart',
  data() {
    return {
      pieChartOf3d: null,
      pieChartOf3dOptions: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.pieChartOf3d = echarts.init(this.$refs.upboxPie3dChartRender);
      this.pieChartOf3d.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initPieChartOf3d();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.pieChartOf3d.resize();
      };
    });
  },
  methods: {
    initPieChartOf3d: function() {
      this.pieChartOf3d.hideLoading();
      this.pieChartOf3dOptions = getPie3D([{
        name: '医疗机构',
        value: 8,
        itemStyle: {
          opacity: 0.5,
          color: 'rgba(66,225,166,.8)'
        }
      },
      {
        name: '公共场所',
        value: 5,
        itemStyle: {
          opacity: 0.5,
          color: 'rgba(243,146,31,.8)'
        }
      },
      {
        name: '集中式、二次供水单位',
        value: 3,
        itemStyle: {
          opacity: 0.5,
          color: 'rgba(250,237,59,.8)'
        }
      },
      {
        name: '学校',
        value: 2,
        itemStyle: {
          opacity: 0.5,
          color: 'rgba(32,219,238,.8)'
        }
      },
      {
        name: '职工用人单位',
        value: 2,
        itemStyle: {
          opacity: 0.5,
          color: 'rgba(50,113,255,.8)'
        }
      }

      ], 2);
      console.log(getPie3D);
      this.pieChartOf3d.setOption(this.pieChartOf3dOptions);
    }
  }
};
</script>
<style lang="scss" scoped>
.uppartBox2_2_chart_container{
  width:100%;
  height:150px;
  .upbox_pie3dChart{
    width:50%;
    height:100%;
  }
}
</style>
