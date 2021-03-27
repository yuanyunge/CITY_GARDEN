<template>
  <div class="topBox3_container bg_img">
    <div class="box-title bg_img" />
    <div class="topBox3_1 m-t-30">
      <div class="legend_title orangeTheme">
        丽水市设区城市日空气质量达标天数比率(%)
      </div>
      <div class="BottomBox3-ul">
        <ul>
          <li><CircleEC :value="95.6" :total="100" color="#4BF3F9" /></li>
          <li><CircleEC :value="98.1" :total="100" color="#42E1A6" /></li>
          <li><CircleEC :value="98.9" :total="100" color="#F3921F" /></li>
        </ul>
      </div>
      <div class="Circle-year">
        <ul><li><span />2018</li><li><span />2019</li><li><span />2020</li></ul>
      </div>
    </div>
    <div class="topBox3_1 topBox3_2">
      <div class="legend_title orangeTheme">
        丽水市地表水水质优良（达到或优于Ⅲ类）水体比例(%)
      </div>
      <div class="BottomBox3-ul">
        <ul class="legend_list horizen">
          <li><SemiCircleEC :value="100" :total="100" color="#4BF3F9" /></li>
          <li><SemiCircleEC :value="100" :total="100" color="#42E1A6" /></li>
          <li><SemiCircleEC :value="100" :total="100" color="#F3921F" /></li>
        </ul>
      </div>
      <div class="Circle-year">
        <ul><li><span />2018</li><li><span />2019</li><li><span />2020</li></ul>
      </div>
    </div>
    <div class="topBox3_1 reportChart">
      <div class="reportChart-header clearfix">
        <div class="legend_title greenTheme">
          主要食品质量安全抽检合格率(%)
          <span class="chartTit">(达标线95%）</span>
        </div>
      </div>
      <TopBox3_3_chart />
    </div>
  </div>
</template>
<script>
import CircleEC from '@/components/CircleEC';
import SemiCircleEC from '@/components/SemiCircleEC';
import TopBox3_3_chart from './TopBox3_3_chart';

export default {
  components: {
    CircleEC,
    SemiCircleEC,
    TopBox3_3_chart
  }
};
</script>
<style lang="scss" scoped>
.topBox3_container {
  width: 618px;
  height: 697px;
  background-image: url("~@/images/healthlishui/jkhjbk_bg@2x.png");
  position: relative;
  padding-top: 68px;
  padding-left: 27px;
  padding-right: 32px;
  margin-left: 19px;
  .box-title {
    background-image: url("~@/images/healthlishui/jkhj_bg@2x.png");
  }
  .topBox3_1{
    position: relative;
    padding-bottom: 10px;
    border-bottom: 0.05208rem dashed rgba(0, 228, 255, 0.2);
      .topBox3_1_records{
         .recordList{
             display: flex;
             &>li{
                 width:112px;
                    height:112px;
                 .outerCircle{
                    width:112px;
                    height:112px;
                    border: 5px solid #FFFFFF;
                    opacity: 0.2;
                    border-radius:50%;
                    .innerCircle{
                        width:100%;
                        height:100%;
                        border:5px solid #4BF3F9;
                    }
                 }

             }
         }

      }
  }
  .topBox3_1:last-child{
    border-bottom: none;
  }
  .topBox2_1,
  .topBox2_2,
  .topBox2_3 {
    padding-bottom: 19px;
    border-bottom: 1px dashed rgba(0, 228, 255, 0.2);
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
  .topBox2_2 {
    margin-top: 16px;
    .reportChart-header {
      .chartTit {
        color: #eb4e29;
      }
    }
  }
  .topBox2_3 {
    margin-top: 16px;
    border-bottom: 0;
    .reportChart-header {
      .chartTit {
        color: #f1911f;
      }
    }
  }
}
.topBox3_container .topBox3_2{
  margin:20px 0;
  padding-bottom:30px;
}
.chartTit {
  color: #f1911f;
  font-size: 16px;
}
</style>
