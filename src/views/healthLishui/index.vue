<template>
  <div class="main-box_page3">
    <div class="topBox_container">
      <ul>
        <li><TopBox1 /></li>
        <li>
          <TopBox2 />
        </li>
        <li><TopBox3 /></li>
      </ul>
    </div>
    <div class="bottomBox_container">
      <ul>
        <li><BottomBox1 /></li>
        <li><BottomBox2 /></li>
        <li><BottomBox3 /></li>
      </ul>
    </div>
  </div>
</template>
<script>
import BottomBox1 from './components/BottomBox1';
import BottomBox2 from './components/BottomBox2';
import BottomBox3 from './components/BottomBox3';
import TopBox1 from './components/topBox1';
import TopBox2 from './components/topBox2';
import TopBox3 from './components/topBox3';
export default {
  components: {
    BottomBox1,
    BottomBox2,
    BottomBox3,
    TopBox1,
    TopBox2,
    TopBox3
  }
};
</script>
<style lang="scss">
.main-box_page3{
  .topBox_container {
    margin-left: 17px;
    & > ul {
      display: flex;
    }
  }
  .bottomBox_container {
    margin-left: 18px;
    margin-top:15px;
    & > ul {
      display: flex;
      >li:nth-child(2){
        margin:0 15px 0 17px;
      }
    }
  }

  .box-title {
    width: 206px;
    height: 84px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .legend_title {
    color: #d1d1d1;
    border-left: 2px solid #00e4ff;
    font-weight:500;
    .warningText {
      color: #f1911f;
    }
    .errorText {
      color: #eb4e29;
    }
    &.greenTheme {
      border-color: #42e1a6;
    }
    &.orangeTheme {
      border-color: #f4941c;
    }
    &.yellowTheme {
      border-color: #d7cc35;
    }
    &.purpleTheme {
      border-color: #724ee0;
    }
  }
  .legend_list {
    display: flex;

    & > li {
      &::before {
        content: "";
        display: inline-block;
        width: 9px;
        height: 9px;

        margin-right: 10px;
      }
      &.itemGreen::before {
        background: #42e1a6;
      }
      &.itemOrange::before {
        background: #f3921f;
      }
      &.itemBlue::before {
        background: #20dbee;
      }
    }
    &.horizen {
      & > li {
        margin-right: 10px;
      }
    }
    &.vertical {
      flex-direction: column;
      & > li {
        &::before {
          border-radius: 50%;
          width: 10px;
          height: 10px;
        }
        margin-bottom:19px;
      }
    }
  }
}
</style>
