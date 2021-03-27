<template>
  <div class="topBox1_1_container bg_img">
    <div class="box-title bg_img"></div>
    <ul class="topBox1_1_1 contentList">
      <li>
        <div class="legend_title">人均预期寿命(岁)</div>
        <div class="contentitem bg_img">
          <div class="contentItemTitle">
            <span class="descText">全省</span><br />
            <span class="valueText">78.5<span class="unitText">岁</span></span>
          </div>
          <ul class="historyList">
            <li>
              <span class="descText">2020</span>
              <span class="valueText"
                >78.26<span class="unitText">岁</span></span
              >
            </li>
            <li>
              <span class="descText">2019</span>
              <span class="valueText"
                >80.81<span class="unitText">岁</span></span
              >
            </li>
            <li>
              <span class="descText">2018</span>
              <span class="valueText"
                >80.36<span class="unitText">岁</span></span
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="part2">
        <div class="legend_title">孕产妇死亡率(万)</div>
        <div class="contentitem bg_img">
          <div class="contentItemTitle">
            <span class="descText">省标准</span><br />
            <span class="valueText"
              >低于9.5/10<span class="unitText">万</span></span
            >
          </div>
          <ul class="historyList">
            <li>
              <span class="descText">2020</span>
              <span class="valueText"
                >6.03/10<span class="unitText">万</span></span
              >
            </li>
            <li>
              <span class="descText">2019</span>
              <span class="valueText"
                >20.02/10<span class="unitText">万</span></span
              >
            </li>
            <li>
              <span class="descText">2018</span>
              <span class="valueText"
                >4.6/10<span class="unitText">万</span></span
              >
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="legend_title">婴儿死亡率(‰)</div>
        <div class="contentitem bg_img">
          <div class="contentItemTitle">
            <span class="descText">省标准</span><br />
            <span class="valueText">低于7<span class="unitText">%</span></span>
          </div>
          <ul class="historyList">
            <li>
              <span class="descText">2020</span>
              <span class="valueText">2.83<span class="unitText">‰</span></span>
            </li>
            <li>
              <span class="descText">2019</span>
              <span class="valueText">2.5<span class="unitText">‰</span></span>
            </li>
            <li>
              <span class="descText">2018</span>
              <span class="valueText">2.12<span class="unitText">‰</span></span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="topBox1_1_2 reportChart">
      <div class="reportChart-header clearfix">
        <div class="legend_title">国家学生体质健康标准达标优良率</div>
        <ul class="legend_list horizen">
          <li class="itemOrange">省</li>
          <li class="itemBlue">市</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topBox1_1_container {
  width: 633px;
  height: 697px;
  background-image: url("~@/images/healthlishui/jkspbk_bg@2x.png");
  position: relative;
  padding-top: 75px;
  padding-left: 24px;
  padding-right:42px;
  .box-title {
    background-image: url("~@/images/healthlishui/jksp_bg@2x.png");
  }
  .topBox1_1_1 {
    display: flex;
    border-bottom:1px dashed #00E4FF;
    & > li {
      .contentitem {
        width: 179px;
        height: 208px;
        background-image: url("~@/images/healthlishui/xxmb_bg@2x.png");
        padding-top: 29px;
        padding-left: 20px;
        padding-right: 20px;

        .contentItemTitle {
          color: #fff;
          font-size: 16px;
          .valueText {
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 800;
            color: #f3921f;
            margin-top: 8px;
            padding-bottom: 5px;
            .unitText {
              color: #f3921f;
              font-size: 16px;
              font-weight: 400;
            }
          }
        }
        .historyList {
          & > li {
            font-family: Source Han Sans CN;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            padding-top: 8px;
            padding-bottom: 8px;

            border-top: 1px dashed rgba(255, 255, 255, 0.2);
            .descText {
              margin-right: 10px;
            }
            .valueText {
              font-size: 18px;
              font-family: Source Han Sans CN;
              font-weight: 800;
              color: #00e4ff;
              margin-top: 8px;
              .unitText {
                color: #00e4ff;
                font-size: 14px;
                font-weight: 400;
              }
            }
          }
        }
      }

      &.part2 {
        margin-left: 17px;
        margin-right: 16px;
      }
    }
  }
  .topBox1_1_2{
      margin-top:12px;
      .reportChart-header{
          display: flex;
      }
  }
}
</style>