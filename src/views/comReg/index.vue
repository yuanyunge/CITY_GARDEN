
<template>
  <div class="comReg_main_container main-box">
    <ul class="up_Part_box">
      <li><UpPartBox_1 /></li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ul class="down_part_box">
      <li>1</li>
      <li>21</li>
    </ul>
  </div>
</template>

<script>
import UpPartBox_1 from './components/UpPartBox_1';
export default {
  name: 'ComReg',
  components: {
    UpPartBox_1
  }
};
</script>

<style lang="scss" scoped>
.comReg_main_container{
  border:1px solid red;
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
