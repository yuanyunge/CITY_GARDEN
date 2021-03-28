<template>
  <div class="main-box_page4">
    <ul class="main-box-continer">
      <li class="mainBox1 bg_img">
        <MainBox1 />
      </li>
      <li class="mainBox2 bg_img"><MainBox2 /></li>
      <li class="mainBox3 bg_img"><MainBox3 /></li>
    </ul>
  </div>
</template>
<script>
import MainBox1 from './components/MainBox1';
import MainBox2 from './components/MainBox2';
import MainBox3 from './components/MainBox3';
export default {
  name: 'PublicHygiene',
  components: {
    MainBox1,
    MainBox2,
    MainBox3
  }
};
</script>
<style lang="scss">
.main-box_page4{
    .main-box-continer{
        display:flex;
        padding-left:20px;
        >li{
            height:940px;

            &.mainBox1{
                width:707px;
                background-image:  url(~@/images/publicHygiene/part1@2x.png);
            }
            &.mainBox2{
                width:695px;
                background-image:  url(~@/images/publicHygiene/part2@2x.png);
                margin-left:8px;
            }
            &.mainBox3{
                width:461px;
                background-image:  url(~@/images/publicHygiene/part3@2x.png);
                margin-left:6px;
            }
        }
    }
}
</style>
