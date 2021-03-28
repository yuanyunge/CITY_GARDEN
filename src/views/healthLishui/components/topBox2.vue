<template>
  <div class="topBox2_container bg_img">
    <div class="box-title bg_img" />

    <div class="topBox2_1 reportChart">
      <div class="reportChart-header clearfix">
        <div class="legend_title greenTheme">
          健康素养水平(%)
          <span class="chartTit">(达标线:26%）</span>
        </div>
        <ul class="legend_list horizen">
          <li class="itemOrange">省</li>
          <li class="itemBlue">市</li>
        </ul>
      </div>

      <TopBox2_1_chart />
    </div>
    <div class="topBox2_2 reportChart">
      <div class="reportChart-header clearfix">
        <div class="legend_title greenTheme">
          15以上人群吸烟率(%)
          <span class="chartTit">(警戒线:22%）</span>
        </div>
        <ul class="legend_list horizen">
          <li class="itemOrange">省</li>
          <li class="itemBlue">市</li>
        </ul>
      </div>

      <TopBox2_2_chart />
    </div>
    <div class="topBox2_3 reportChart">
      <div class="reportChart-header clearfix">
        <div class="legend_title greenTheme">
          经常参加体育锻炼人数比例(%)
          <span class="chartTit">(达标线28.3%）</span>
        </div>
        <ul class="legend_list horizen">
          <li class="itemGreen">市</li>
        </ul>
      </div>

      <TopBox2_3_chart />
    </div>
  </div>
</template>
<script>
import TopBox2_1_chart from './topBox2_1_chart';
import TopBox2_2_chart from './topBox2_2_chart';
import TopBox2_3_chart from './topBox2_3_chart';

export default {
  components: {
    TopBox2_1_chart,
    TopBox2_2_chart,
    TopBox2_3_chart
  }
};
</script>
<style lang="scss" scoped>
.topBox2_container {
  width: 602px;
  height: 697px;
  background-image: url("~@/images/healthlishui/jkshbk_bg@2x.png");
  position: relative;
  padding-top: 80px;
  padding-left: 27px;
  padding-right: 42px;
  margin-left:16px;
  .box-title {
    background-image: url("~@/images/healthlishui/jksh_bg@2x.png");
  }
  .topBox2_1, .topBox2_2,.topBox2_3{
      padding-bottom:19px;
      border-bottom:1px dashed rgba(0,228,255,.2);
    .reportChart-header {
      .legend_title {
        float: left;
      }
      .legend_list {
        float: right;
      }
      .chartTit {
        color: #f1911f;
        font-size: 16px;
      }
    }
  }
  .topBox2_2{
      margin-top:16px;
    .reportChart-header {
      .chartTit {
        color: #EB4E29;
      }
    }
  }
  .topBox2_3{
      margin-top:16px;
      border-bottom:0;
    .reportChart-header {
      .chartTit {
        color: #F1911F;
      }
    }
  }

}
</style>
