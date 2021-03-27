<template>
  <div class="bottomBox2_2_chart">
    <div
      class="bottomBox2_2_chartCon"
      id="bottomBox2_2_chart"
      ref="bottomBox2_2_chart"
    ></div>
    <div class="legend-container">
      <ul class="legend_list vertical">
        <li class="itemBlue">2018<span class="valueText">2.16㎡</span></li>
        <li class="itemOrange">2019<span class="valueText">2.62㎡</span></li>
        <li class="itemGreen">2020<span class="valueText">2.62㎡</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
import * as Highcharts from "highcharts";
import Highcharts3D from "highcharts/highcharts-3d";
Highcharts3D(Highcharts);

export default {
  name: "Pie3dChart",
  data() {
    return {
      pieChartOf3d: null,
      pieChartOf3dOptions: {},
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initPieChartOf3d();
    });
  },
  methods: {
    initPieChartOf3d: function () {
      var each = Highcharts.each,
        round = Math.round,
        cos = Math.cos,
        sin = Math.sin,
        deg2rad = Math.deg2rad;
      Highcharts.wrap(
        Highcharts.seriesTypes.pie.prototype,
        "translate",
        function (proceed) {
          proceed.apply(this, [].slice.call(arguments, 1));
          // Do not do this if the chart is not 3D
          if (!this.chart.is3d()) {
            return;
          }
          var series = this,
            chart = series.chart,
            options = chart.options,
            seriesOptions = series.options,
            depth = seriesOptions.depth || 0,
            options3d = options.chart.options3d,
            alpha = options3d.alpha,
            beta = options3d.beta,
            z = seriesOptions.stacking
              ? (seriesOptions.stack || 0) * depth
              : series._i * depth;
          z += depth / 2;
          if (seriesOptions.grouping !== false) {
            z = 0;
          }
          each(series.data, function (point) {
            var shapeArgs = point.shapeArgs,
              angle;
            point.shapeType = "arc3d";
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
              ),
            };
          });
        }
      );
      (function (H) {
        H.wrap(
          Highcharts.SVGRenderer.prototype,
          "arc3dPath",
          function (proceed) {
            // Run original proceed method
            var ret = proceed.apply(this, [].slice.call(arguments, 1));
            ret.zTop = (ret.zOut + 0.5) / 100;
            return ret;
          }
        );
      })(Highcharts);
      Highcharts.chart("bottomBox2_2_chart", {
        chart: {
          type: "pie",
          animation: false,
          backgroundColor: "transparent",
          events: {
            load: function () {
              var each = Highcharts.each,
                points = this.series[0].points;
              each(points, function (p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran,
                });
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran,
                });
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran,
                });
              });
            },
          },
          options3d: {
            enabled: true,
            alpha: 60,
            beta: 0,
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            colors: [
              "rgba(32, 219, 238, .5)",
              "rgba(249, 174, 0, .5)",
              "rgba(66, 225, 166, .5)"
              
            ],
            depth: 35,
            innerSize: "60%",
            dataLabels: {
              enabled: false,
            },
          },
        },
        title: {
          text: null,
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            type: "pie",
            name: "人均体育场地面积",
            data: [
              {
                name: "2018",
                y: 2.16,
                h: 20,
              },
              {
                name: "2019",
                y: 2.62,
                h: 1,
              },
              {
                name: "2020",
                y: 2.62,
                h: 5,
              },
            ],
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.bottomBox2_2_chart {
  width: 100%;
  height: 145px;
  display: flex;
  & > div {
    width: 50%;
    height: 100%;
    .legend_list {
        margin-top:30px;
      .valueText {
          color:#20DBEE;
          font-weight:bold;
          margin-left: 8px;
      }
    }
  }
}
</style>