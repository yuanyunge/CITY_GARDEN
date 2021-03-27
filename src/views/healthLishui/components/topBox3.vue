<template>
  <div class="topBox3_container bg_img">
    <div class="box-title bg_img"></div>
    <div class="topBox3_1 reportRecord">
      <div class="legend_title orangeTheme">
        丽水市设区城市日空气质量达标天数比率(%)
      </div>
      <div class="topBox3_1_records">
          <ul class="recordList">
              <li>
                  <el-progress type="circle" :percentage="85" color="#4BF3F9"></el-progress>
              </li>
              <li>
                  <el-progress type="circle" :percentage="85" color="#42E1A6"></el-progress>
              </li>
              <li>
                  <el-progress type="circle" :percentage="85" color="#F3921F"></el-progress>
              </li>
              <!-- <li>
                  <el-progress type="circle" :percentage="25"></el-progress>
              </li>
              <li>
                  <el-progress type="circle" :percentage="25"></el-progress>
              </li> -->
          </ul>
      </div>
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

      <TopBox2_2_chart></TopBox2_2_chart>
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

      <TopBox2_3_chart></TopBox2_3_chart>
    </div>
  </div>
</template>
<script>
import TopBox2_1_chart from "./topBox2_1_chart";
import TopBox2_2_chart from "./topBox2_2_chart";
import TopBox2_3_chart from "./topBox2_3_chart";

export default {
  components: {
    TopBox2_1_chart,
    TopBox2_2_chart,
    TopBox2_3_chart,
  },
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
</style>