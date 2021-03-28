<template>
  <div class="BottomBox3 bg_img">
    <div class="box-title bg_img" />
    <div class="legend_title">国家卫生乡镇创建率(%)</div>
    <div class="BottomBox3-ul">
      <ul>
        <li><CircleEC :value="12" :total="845" unit="个" color="#4BF3F9" /></li>
        <li><CircleEC :value="57" :total="135" unit="个" color="#42E1A6" /></li>
        <li><CircleEC :value="57" :total="135" unit="个" color="#F3921F" /></li>
      </ul>
    </div>
    <div class="Circle-year">
      <ul><li><span />2018</li><li><span />2019</li><li><span />2020</li></ul>
    </div>
  </div>
</template>

<script>
import CircleEC from '@/components/CircleEC';
export default {
  components: {
    CircleEC
  }
};
</script>

<style lang="scss" scoped>
.BottomBox3{
  width:619px;
  height:243px;
  background-image:  url(~@/images/healthlishui/jkzlbk_bg@2x.png);
  padding:65px 20px 10px 25px;
  position: relative;
  .box-title{
    position: absolute;
    width: 206px;
    height:84px;
    background-image:  url(~@/images/healthlishui/jkzl_bg.png);
    top:0;
    left:0;
  }
}
.BottomBox3 .legend_title{
    border-left-color:#724EE0;
}

</style>
