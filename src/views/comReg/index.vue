
<template>
  <div class="comReg_main_container main-box">
    <ul class="up_Part_box">
      <li><UpPartBox_1 /></li>
      <li>
        <div><UpPartBox_2_1 /></div>
        <div><UpPartBox_2_2 /></div>
      </li>
      <li>
        <UpPartBox_3 /></li>
    </ul>
    <ul class="down_part_box">
      <li>1</li>
      <li>21</li>
    </ul>
  </div>
</template>

<script>
import UpPartBox_1 from './components/UpPartBox_1';
import UpPartBox_2_1 from './components/UpPartBox_2_1';
import UpPartBox_2_2 from './components/UpPartBox_2_2';
import UpPartBox_3 from './components/UpPartBox_3';
export default {
  name: 'ComReg',
  components: {
    UpPartBox_1,
    UpPartBox_2_1,
    UpPartBox_2_2,
    UpPartBox_3
  }
};
</script>

<style lang="scss" scoped>
.comReg_main_container{
  padding:20px;
  &>ul{
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
  }
  // .up_Part_box{

  // }
}
</style>
