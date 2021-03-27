<template>
  <div class="own_part_box_2 bg_img">
    <div class="down_part_box_2_header bg_img" />
    <div class="down_part_box_2_content">
      <ul>
        <li><div class="legend_title">生产企业数</div><DownPartBox_1_chat /></li>
        <li><div class="legend_title">第三类医疗器械经营许可企业数(高风险)</div><DownPartBox_2_chat /></li>
        <li><div class="legend_title">第二类医疗器械经营许可企业数(中风险)</div><DownPartBox_3_chat /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import DownPartBox_1_chat from './DownPartBox_1_chat';
import DownPartBox_2_chat from './DownPartBox_2_chat';
import DownPartBox_3_chat from './DownPartBox_3_chat';
export default {
  components: {
    DownPartBox_1_chat,
    DownPartBox_2_chat,
    DownPartBox_3_chat
  }
};
</script>

<style lang="scss" scoped>
.own_part_box_2{
  width:936px;
  height:286px;
  background-image:  url(~@/images/comreg/ylqxjg_png.png);
  padding:60px 20px 10px 20px;
  position: relative;
  .down_part_box_2_header{
    position: absolute;
    width: 226px;
    height:56px;
    background-image:  url(~@/images/comreg/ylqxjg_bt@2x.png);
    top:10px;
    left:0;
  }
}
.down_part_box_2_content{
    height:100%;
}
.down_part_box_2_content>ul{
    display:flex;
    justify-content:space-between;
    height:100%;
    >li:last-child{
        width:300px;
    }
    >li:first-child{
        width:245px;
    }
    >li:nth-child(2){
        width:300px;
    }
}
.down_part_box_2_content>ul>li{
    display:flex;
    flex-direction:column;
    >div:last-child{
        flex-grow: 1;
    }
}
</style>
