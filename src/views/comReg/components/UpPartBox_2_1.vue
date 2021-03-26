<template>
  <div class="uppartBox_2_1 bg_img">
    <div class="up_part_box_2_1_title bg_img" />
    <ul class="uppartbox_2_1_con">
      <li>
        <div class="legend_title">医疗卫生机构分类</div>
        <table class="recordList">
          <tr>
            <td>县级及以上医院</td>
            <td><span class="recordItem">22</span></td>
          </tr>
          <tr>
            <td>基层医疗卫生机构</td>
            <td><span class="recordItem">228</span></td>
          </tr>
          <tr>
            <td>其他医疗卫生机构</td>
            <td><span class="recordItem">282</span></td>
          </tr>
        </table>
      </li>
      <li>
        <div class="legend_title">卫生人员(单位：人)</div>
        <UpPartBox_2_1_chart />
      </li>
    </ul>
  </div>
</template>
<script>
import UpPartBox_2_1_chart from './UpPartBox_2_1_chart';
export default {
  components: {
    UpPartBox_2_1_chart
  }
};
</script>
<style lang="scss" scoped>
.uppartBox_2_1 {
  width: 572px;
  height: 266px;
  position: relative;
  background-image: url(~@/images/comreg/wszy_png@2x.png);
  padding-left: 20px;
  padding-top: 77px;
  padding-right: 20px;

  .up_part_box_2_1_title {
    position: absolute;
    background-image: url(~@/images/comreg/wszy_bt@2x.png);
    width: 226px;
    height: 56px;
    top: 15px;
    left: 0;
  }
  .uppartbox_2_1_con{
    display: flex;
    &>li{
      width:50%;
      .recordList{
        width:90%;
        margin-top:20px;
        td{
          padding:6px 0;
          .recordItem{
            font-size:24px;
            color:#20DBEE;
            font-weight:bold;
          }
        }
      }
    }
  }
}
</style>
