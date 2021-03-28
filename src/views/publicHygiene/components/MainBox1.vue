<template>
  <div class="mainBox1-container">
    <div class="box-title bg_img" />
    <ul class="mainBox1_parts">
      <li class="mainBox1_1">
        <div class="legend_title">突发公共卫生事件及相关信息报告数</div>
        <MainBox1_1_chart />
      </li>
      <li class="mainBox1_2">
        <div class="legend_title">甲乙类传染病</div>
        <MainBox1_2_chart />
      </li>
      <li class="mainBox1_3">
        <div class="legend_title">甲乙类传染病发病<span>TOP5</span></div>
        <MainBox1_1_chart />
      </li>
      <li class="mainBox1_4">
        <div class="legend_title">法定传染病</div>
        <MainBox1_1_chart />
      </li>
      <li class="mainBox1_5">
        <div class="legend_title">免疫规划监测</div>
        <MainBox1_1_chart />
      </li>
    </ul>
  </div>
</template>
<script>
import MainBox1_1_chart from './MainBox1_1_chart';
import MainBox1_2_chart from './MainBox1_2_chart';

export default {
  components: {
    MainBox1_1_chart,
    MainBox1_2_chart
  }
};
</script>
<style lang="scss" scoped>
.mainBox1-container {
  padding-left: 20px;
  padding-top: 78px;
  padding-right:16px;
  position: relative;
  .box-title {
    background-image: url("~@/images/publicHygiene/tfggwsjc@2x.png");
    width: 422px;
    height:56px;
    position:absolute;
    top:20px;
    left:0;
  }
  .mainBox1_parts {
    display: flex;
    flex-wrap: wrap;
    & > li {
      .legend_title {
        margin-bottom: 10px;
      }
    }
    .mainBox1_1,
    .mainBox1_2 {
      width: 50%;
      height: 324px;
    }
    .mainBox1_3,
    .mainBox1_4 {
      width: 50%;
      height: 324px;
    }
    .mainBox1_5{
        width:100%;
    }
  }
}
</style>
