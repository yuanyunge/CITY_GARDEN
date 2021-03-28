import * as Highcharts from 'highcharts';
export function draw3dPie() {
  var each = Highcharts.each;
  var round = Math.round;
  var cos = Math.cos;
  var sin = Math.sin;
  var deg2rad = Math.deg2rad;
  Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'translate', function(proceed) {
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
    var z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
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
        translateX: round(cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
        translateY: round(sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad))
      };
    });
  });
  (function(H) {
    H.wrap(Highcharts.SVGRenderer.prototype, 'arc3dPath', function(proceed) {
      // Run original proceed method
      var ret = proceed.apply(this, [].slice.call(arguments, 1));
      ret.zTop = (ret.zOut + 0.5) / 100;
      return ret;
    });
  }(Highcharts));
}
