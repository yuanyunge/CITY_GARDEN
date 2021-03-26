<template>
  <div class="up_part_box_1 bg_img">
    <div class="up_part_box_1_title bg_img" />
    <div class="up_part_box_1_1">
      <div class="up_part_box_1_1_title"><img src="~@/images/comreg/yyxl_bt@2x.png"></div>
      <ul class="up_part_box_charts">
        <li><UpPartBox1chart1 /></li>
        <li>图表2</li>
      </ul>
    </div>
  </div>
</template>
<script>
import UpPartBox1chart1 from './UpPartBox_1_chart_1';
export default {
  components: {
    UpPartBox1chart1
  }
};
</script>
<style lang="scss" scoped>
.up_part_box_1{
  width:698px;
  height:646px;
  position:relative;
  background-image: url(~@/images/comreg/yljg_png@2x.png);
  padding-left:20px;
  padding-top:77px;
  padding-right:20px;
  .up_part_box_1_title{
    position:absolute;
    background-image: url(~@/images/comreg/yljg_bt@2x.png);
    width:226px;
    height:56px;
    top:15px;
    left:0;
  }
  .up_part_box_1_1{
    .up_part_box_1_1_title{
      img{
        width:102px;
        height:19px;
      }
    }
    .up_part_box_charts{
      display:flex;
      padding-top:19px;
      padding-bottom:20px;
      height:312px;
      &>li{
        width:50%;
        height:100%;
        border:1px solid red;
      }
    }
  }
}

</style>
