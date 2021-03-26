<template>
  <div class="up_part_box_3 bg_img">
    <div class="up_part_box_3_title bg_img" />
    <div class="up_part_box_3_1">
      <div class="legend_title">药企监管(单位：家）</div>
      <div class="upBox_3_1_item greenTheme">
        <div class="small_title">药品生产企业登记评定</div>
        <ul class="itemList">
          <li>
            <span class="valueText">22</span><br>
            <span class="titleText">| 企业数</span>
          </li>
          <li>
            <span class="valueText">8</span><br>
            <span class="titleText">| AA</span>
          </li>
          <li>
            <span class="valueText">9</span><br>
            <span class="titleText">| A</span>
          </li>
          <li>
            <span class="valueText">5</span><br>
            <span class="titleText">| B</span>
          </li>
          <li>
            <span class="valueText">0</span><br>
            <span class="titleText">| C</span>
          </li>
        </ul>
      </div>
      <div class="upBox_3_1_item orangeTheme">
        <div class="small_title">药品生产企业登记评定</div>
        <ul class="itemList">
          <li>
            <span class="valueText">80</span><br>
            <span class="titleText">| 检查家次</span>
          </li>
          <li>
            <span class="valueText">100</span><br>
            <span class="titleText">| 检查覆盖率</span>
          </li>
          <li>
            <span class="valueText">5</span><br>
            <span class="titleText">| 告诫家次</span>
          </li>
          <li>
            <span class="valueText">2</span><br>
            <span class="titleText">| 约谈企业</span>
          </li>
          <li>
            <span class="valueText">100</span><br>
            <span class="titleText">| 整改率</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="up_part_box_3_2">
      <UpPartBox_3_chart />
    </div>
  </div>
</template>

<script>
import UpPartBox_3_chart from './UpPartBox_3_chart';
export default {
  components: {
    UpPartBox_3_chart
  }
};
</script>

<style lang="scss" scoped>
.up_part_box_3 {
  width: 572px;
  height: 647px;
  position: relative;
  margin-left: 19px;
  background-image: url(~@/images/comreg/ypjg_png@2x.png);
  padding-left: 23px;
  padding-top: 77px;
  padding-right: 32px;

  .up_part_box_3_title {
    position: absolute;
    background-image: url(~@/images/comreg/ypjg_bt@2x.png);
    width: 226px;
    height: 56px;
    top: 15px;
    left: 0;
  }

  .up_part_box_3_1 {
    .upBox_3_1_item {
      padding-top: 19px;

      .small_title {
        font-size: 16px;
      }

      .itemList {
        display: flex;
        padding-top:10px;
        padding-left:13px;
        padding-right:27px;
        justify-content: space-between;
        .valueText {
          color: #fff;
          font-size: 24px;
        }
        .titleText{
          font-size:16px;
          margin-top:9px;
          display: inline-block;
        }
      }
    }

    .upBox_3_1_item.greenTheme {
      color: #42E1A6;
      .titleText{
        border-color:#42E1A6;
      }
    }
    .upBox_3_1_item.orangeTheme {
      color: #F3921F;
    }

  }

  .up_part_box_3_2 {
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
            padding-bottom: 8px;
            font-size: 14px;
            border-radius: 6px;
            vertical-align: middle;
            color: #D1D1D1;

            .descMiddleTit {
              font-size: 14px;
              color: #20DBEE;
              padding-bottom: 5px;
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

            &.countyCon {
              background: rgba(66, 225, 166, .2);

              .descMiddleTit {
                color: #42E1A6;
              }

              li {
                .recordItem {
                  color: #42E1A6;
                }
              }
            }
          }
        }

        &.medicalPercent {
          .medicalPercentCon {}
        }

        &.inhosDays {
          .inhosDaysCon {
            vertical-align: top;
            margin-left: 10px;
          }
        }

        &.surgeryPercent {
          .surgeryPercentCon {
            vertical-align: top;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
