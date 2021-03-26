<template>
  <div class="uppartBox_2_2 bg_img">
    <div class="up_part_box_2_2_title bg_img" />
    <ul class="uppartbox_2_2_con">
      <li>
        <div class="small_part_header clearfix">
          <div class="legend_title">医疗卫生机构分类</div>
          <div class="legend_options">
            <el-select v-model="type" placeholder="请选择" class="chart_options" popper-class="chart_options_dropdown">
              <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </div>
        <div class="uppartBox2_2_chart">
          <UpPartBox_2_2_chart />
        </div>
      </li>
      <li>
        <div class="legend_title">集中式供水单位出厂水指标</div>
        <ul class="indicatorsList">
          <li>
            <div class="leftImg"><img src="~@/images/comreg/yl_icon@2x.png"></div>
            <div class="rightContent">
              <span class="valueText">0.18</span><br>
              <span class="unitText">余氯(mg/L)</span>
            </div>
          </li>
          <li>
            <div class="leftImg"><img src="~@/images/comreg/ph_icon@2x.png"></div>
            <div class="rightContent">
              <span class="valueText">7.08</span><br>
              <span class="unitText">ph</span>
            </div>
          </li>
          <li>
            <div class="leftImg"><img src="~@/images/comreg/zd_icon@2x.png"></div>
            <div class="rightContent">
              <span class="valueText">0.18</span><br>
              <span class="unitText">浊度(NTU)</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import UpPartBox_2_2_chart from './UpPartBox_2_2_chart';
export default {
  components: {
    UpPartBox_2_2_chart
  },
  data() {
    return {
      type: 1,
      typeOptions: [{ label: '违法违规行为件数', value: 1 }]
    };
  }
};
</script>
<style lang="scss" scoped>
.uppartBox_2_2 {
  width: 572px;
  height: 363px;
  position: relative;
  margin-top:19px;
  margin-left:19px;
  background-image: url(~@/images/comreg/wsjd_png@2x.png);
  padding-left: 23px;
  padding-top: 77px;
  padding-right: 30px;

  .up_part_box_2_2_title {
    position: absolute;
    background-image: url(~@/images/comreg/wsjd_bt@2x.png);
    width: 226px;
    height: 56px;
    top: 15px;
    left: 0;
  }
  .uppartbox_2_2_con{
    &>li{
      .small_part_header{
        .legend_title{
          float:left;

        }
        .legend_options{
          float:right;
          width:184px;
        }
      }

      .indicatorsList{
        margin-top:8px;
        display:flex;
        justify-content: space-around;
        &>li{
          display:flex;
          align-items:center;
          .leftImg{
            img{
              width:70px;
              height:70px;
            }
          }
          .rightContent{
            margin-left:9px;
            .valueText{
              font-weight: bold;
              font-size:26px;
              color:#20DBEE;
            }
            .unitText{
              font-size:14px;
              color:#fff;
              margin-top:10px;
            }
          }
        }
      }
    }
  }
}
</style>
