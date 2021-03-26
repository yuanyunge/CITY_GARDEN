<template>
  <div class="up_part_box_1 bg_img">
    <div class="up_part_box_1_title bg_img" />
    <div class="up_part_box_1_1">
      <div class="up_part_box_1_1_title"><img src="~@/images/comreg/yyxl_bt@2x.png"></div>
      <ul class="up_part_box_charts">
        <li>
          <UpPartBox1chart1 />
        </li>
        <li>
          <UpPartBox1chart2 />
        </li>
      </ul>
    </div>
    <div class="up_part_box_1_2">
      <div class="up_part_box_1_2_title"><img src="~@/images/comreg/ylzl_bt@2x.png"></div>
      <ul class="uppartbox_content">
        <li class="uppartbox_contentItem medicalPercent">
          <div class="legend_title">医疗服务收入占比</div>
          <div class="contentItemDesc medicalPercentCon">
            <ul class="clearfix">
              <li class="lastYear">
                <span class="year">2020年</span>
                <span class="recordItem">92.14%</span>
              </li>
              <li class="bflastYear">
                <span class="year">2019年</span>
                <span class="recordItem">91.07%</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="uppartbox_contentItem inhosDays">
          <div class="legend_title">平均住院日(天）</div>
          <div class="contentItemDesc inhosDaysCon">
            <div class="descMiddleTit">市级</div>
            <ul class="clearfix">
              <li class="lastYear">
                <span class="year">2020年</span>
                <span class="recordItem">7.43</span>
              </li>
              <li class="bflastYear">
                <span class="year">2019年</span>
                <span class="recordItem">8.42</span>
              </li>
            </ul>
          </div>
          <div class="contentItemDesc inhosDaysCon countyCon">
            <div class="descMiddleTit">县级</div>
            <ul class="clearfix">
              <li class="lastYear">
                <span class="year">2020年</span>
                <span class="recordItem">7.44</span>
              </li>
              <li class="bflastYear">
                <span class="year">2019年</span>
                <span class="recordItem">9.12</span>
              </li>
            </ul>
          </div>
        </li>
        <li class="uppartbox_contentItem surgeryPercent">
          <div class="legend_title">三四类手术占比</div>
          <div class="contentItemDesc surgeryPercentCon">
            <div class="descMiddleTit">市级</div>
            <ul class="clearfix">
              <li class="lastYear">
                <span class="year">2020年</span>
                <span class="recordItem">88.2%</span>
              </li>
              <li class="bflastYear">
                <span class="year">2019年</span>
                <span class="recordItem">90%</span>
              </li>
            </ul>
          </div>
          <div class="contentItemDesc surgeryPercentCon countyCon">
            <div class="descMiddleTit">县级</div>
            <ul class="clearfix">
              <li class="lastYear">
                <span class="year">2020年</span>
                <span class="recordItem">88.2%</span>
              </li>
              <li class="bflastYear">
                <span class="year">2019年</span>
                <span class="recordItem">90%</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UpPartBox1chart1 from './UpPartBox_1_chart_1';
import UpPartBox1chart2 from './UpPartBox_1_chart_2';

export default {
  components: {
    UpPartBox1chart1,
    UpPartBox1chart2
  }
};
</script>

<style lang="scss" scoped>
.up_part_box_1 {
  width: 698px;
  height: 646px;
  position: relative;
  background-image: url(~@/images/comreg/yljg_png@2x.png);
  padding-left: 20px;
  padding-top: 77px;
  padding-right: 20px;

  .up_part_box_1_title {
    position: absolute;
    background-image: url(~@/images/comreg/yljg_bt@2x.png);
    width: 226px;
    height: 56px;
    top: 15px;
    left: 0;
  }

  .up_part_box_1_1 {
    border-bottom: 1px dotted rgba(255, 255, 255, .4);

    .up_part_box_1_1_title {
      img {
        width: 102px;
        height: 19px;
      }
    }

    .up_part_box_charts {
      display: flex;
      padding-top: 19px;
      padding-bottom: 20px;
      height: 312px;

      &>li {
        width: 50%;
        height: 100%;
      }

      &>li:first-child {
        padding-right: 25px;
      }

      &>li:last-child {
        padding-left: 25px;
      }
    }
  }

  .up_part_box_1_2 {
    padding-top: 20px;

    .up_part_box_1_2_title {
      img {
        width: 102px;
        height: 19px;
      }
    }

    .uppartbox_content {
      margin-top: 9px;

      &>li {
        padding: 9px 0;

        .recordItem {}

        .recordItem::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #20DBEE;
          border-radius: 50%;
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }

        &.uppartbox_contentItem {
          .legend_title {
            display: inline-block;
            vertical-align: middle;
          }

          .contentItemDesc {
            padding-left: 9px;
            padding-right: 9px;
            display: inline-block;
            margin-left: 20px;
            background: rgba(32, 219, 238, .2);
            padding-top: 8px;
            padding-bottom:8px;
            font-size: 14px;
            border-radius: 6px;
            vertical-align: middle;
            color: #D1D1D1;

            .descMiddleTit {
              font-size: 14px;
              color: #20DBEE;
              padding-bottom:5px;
            }

            li {
              float: left;
              line-height: 14px;

              &.lastYear {
                border-right: 1px solid #fff;
                padding-right: 5px;
              }

              &.bflastYear {
                padding-left: 5px;
              }

              .recordItem {
                font-size: 16px;
                color: #20DBEE;
                font-weight: bold;
                margin-left: 6px;
              }
            }

            &.countyCon{
               background: rgba(66,225,166, .2);
               .descMiddleTit{
                 color:#42E1A6;
               }
               li{
                 .recordItem{
                   color:#42E1A6;
                 }
               }
            }
          }
        }

        &.medicalPercent {
          .medicalPercentCon {
          }
        }
        &.inhosDays{
          .inhosDaysCon{
            vertical-align: top;
            margin-left:10px;
          }
        }
        &.surgeryPercent{
          .surgeryPercentCon{
            vertical-align: top;
            margin-left:10px;
          }
        }
      }
    }
  }
}
</style>
