<template>
  <div class="uppartBox2_2_chart_container">
    <div
      id="upbox_pie3dChart"
      ref="upboxPie3dChartRender"
      class="upbox_pie3dChart"
    />
    <div class="uppartBox2_2_legend">
      <ul class="legend_list">
        <li class="item1">医疗机构：8次</li>
        <li class="item2">公共场所：5次</li>
        <li class="item3">集中式、二次供水单位：3次</li>
        <li class="item4">学校：2次</li>
        <li class="item5">职工用人单位：2次</li>
      </ul>
    </div>
  </div>
</template>
<script>
import * as Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
Highcharts3D(Highcharts);

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
      // this.pieChartOf3d = echarts.init(this.$refs.upboxPie3dChartRender);
      // this.pieChartOf3d.showLoading({
      //   color: "#fff",
      //   maskColor: "rgba(0, 0, 0, 0)",
      //   zlevel: 0,
      // });
      this.initPieChartOf3d();
      // const resizeFun = window.onresize || function () {};
      // window.onresize = () => {
      //   resizeFun();
      //   this.pieChartOf3d.resize();
      // };
    });
  },
  methods: {
    initPieChartOf3d: function() {
      var each = Highcharts.each;
      var round = Math.round;
      var cos = Math.cos;
      var sin = Math.sin;
      var deg2rad = Math.deg2rad;
      Highcharts.wrap(
        Highcharts.seriesTypes.pie.prototype,
        'translate',
        function(proceed) {
          proceed.apply(this, [].slice.call(arguments, 1));
          // Do not do this if the chart is not 3D
          if (!this.chart.is3d()) {
            return;
          }
          var series = this;
          var chart = series.chart;
          var options = chart.options;
          var seriesOptions = series.options;
          var depth = seriesOptions.depth || 0;
          var options3d = options.chart.options3d;
          var alpha = options3d.alpha;
          var beta = options3d.beta;
          var z = seriesOptions.stacking
            ? (seriesOptions.stack || 0) * depth
            : series._i * depth;
          z += depth / 2;
          if (seriesOptions.grouping !== false) {
            z = 0;
          }
          each(series.data, function(point) {
            var shapeArgs = point.shapeArgs;
            var angle;
            point.shapeType = 'arc3d';
            var ran = point.options.h;
            shapeArgs.z = z;
            shapeArgs.depth = depth * 0.75 + ran;
            shapeArgs.alpha = alpha;
            shapeArgs.beta = beta;
            shapeArgs.center = series.center;
            shapeArgs.ran = ran;
            angle = (shapeArgs.end + shapeArgs.start) / 2;
            point.slicedTranslation = {
              translateX: round(
                cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              ),
              translateY: round(
                sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              )
            };
          });
        }
      );
      (function(H) {
        H.wrap(
          Highcharts.SVGRenderer.prototype,
          'arc3dPath',
          function(proceed) {
            // Run original proceed method
            var ret = proceed.apply(this, [].slice.call(arguments, 1));
            ret.zTop = (ret.zOut + 0.5) / 100;
            return ret;
          }
        );
      })(Highcharts);
      Highcharts.chart('upbox_pie3dChart', {
        chart: {
          type: 'pie',
          animation: false,
          backgroundColor: 'transparent',
          events: {
            load: function() {
              var each = Highcharts.each;
              var points = this.series[0].points;
              each(points, function(p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran
                });
              });
            }
          },
          options3d: {
            enabled: true,
            alpha: 60,
            beta: 0
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: ['rgba(66, 225, 166, .5)', 'rgba(243, 146, 31, .5)', 'rgba(250, 237, 59, .5)', 'rgba(32, 219, 238, .5)', 'rgba(50, 113, 255, .5)'],
            depth: 35,
            innerSize: '60%',
            dataLabels: {
              enabled: false
            }
          }
        },
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        series: [
          {
            type: 'pie',
            name: '违法违规执行次数',
            data: [
              {
                name: '医疗机构',
                y: 8,
                h: 20
              },
              {
                name: '公共场所',
                y: 5,
                h: 1
              },
              {
                name: '集中式、二次供水单位',
                y: 3,
                h: 5
              },
              {
                name: '学校',
                y: 2,
                h: 8
              },
              {
                name: '职工用人单位',
                y: 2,
                h: 16
              }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.uppartBox2_2_chart_container {
  width: 100%;
  height: 150px;
  display: flex;
  .upbox_pie3dChart {
    width: 50%;
    height: 100%;
  }
  .legend_list{
    padding-top:10px;
    &>li{
      margin-top:8px;
      &::before{
        content:'';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #42E1A6;
        border-radius: 50%;
        margin-right:8px;
      }
      &.item1::before{
        background: #42E1A6;
      }
      &.item2::before{
        background:  #F3921F;
      }
      &.item3::before{
        background: #FAED3B;
      }
      &.item4::before{
        background: #20DBEE;
      }
      &.item5::before{
        background: #3271FF;
      }
    }
  }
}
</style>
