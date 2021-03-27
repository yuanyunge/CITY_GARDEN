<template>
  <div class="main-box">
    <div class="topBox_container">
      <ul>
        <li><TopBox1_1></TopBox1_1></li>
        <li>
          <div class="legend_title">婴儿死亡率(‰)</div>
          <ul class="legend_list horizen">
            <li class="itemGreen">swewe</li>
            <li class="itemOrange">swewe</li>
          </ul>
          <ul class="legend_list vertical">
            <li class="itemGreen">1</li>
            <li class="itemOrange">2</li>
            <li class="itemBlue">3</li>
          </ul>
        </li>
        <li>3</li>
      </ul>
    </div>
    <div class="bottomBox_container">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>
<script>
import TopBox1_1 from "./components/topBox1_1";
export default {
  components: {
    TopBox1_1,
  },
};
</script>
<style lang="scss" scoped>
.main-box {
  .topBox_container {
    margin-left: 17px;
    & > ul {
      display: flex;
    }
  }
  .bottomBox_container {
    margin-left: 18px;
    & > ul {
      display: flex;
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