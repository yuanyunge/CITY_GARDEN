<template>
  <div class="BottomBox2 bg_img">
    <div class="box-title bg_img" />
    <ul class="bottomBox2_charts">
      <li>
        <div class="legend_title yellowTheme">城乡居民医疗保险参保率(%)</div>
        <div class="chart_intro">(达标线99%）</div>
        <BottomBox2_1_chart></BottomBox2_1_chart>
      </li>
      <li>
        <div class="legend_title yellowTheme">人均体育场地面积(㎡)</div>
        <BottomBox2_2_chart></BottomBox2_2_chart>

      </li>
    </ul>
  </div>
</template>

<script>
import BottomBox2_1_chart from './BottomBox2_1_chart';
import BottomBox2_2_chart from './BottomBox2_2_chart';

export default {
  components:{
    BottomBox2_1_chart,
    BottomBox2_2_chart
  }
};
</script>

<style lang="scss" scoped>
.BottomBox2{
  width:602px;
  height:243px;
  background-image:  url(~@/images/healthlishui/jkbzbk-bg.png);
  padding:65px 19px 10px 28px;
  position: relative;
  .box-title{
    position: absolute;
    width: 206px;
    height:84px;
    background-image:  url(~@/images/healthlishui/jkbz_bg.png);
    top:0;
    left:0;
  }
  .bottomBox2_charts{
    display:flex;
    &>li{
      width:50%;
      .chart_intro{
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #F3921F;
        margin-top:10px;
        margin-bottom:10px;
      }
      
    }
  }
}
</style>
