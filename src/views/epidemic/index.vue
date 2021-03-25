<template>
  <div class="main-box">
    <ul>
      <li><main-box_1_1 /><main-box_1_2 /></li>
      <li class="middlePart">
        <main-box_2_1 />
      </li>
      <li>
        <main-box_3_1 />
        <main-box_3_2 />
      </li>
    </ul>
  </div>
</template>

<script>
import MainBox_1_1 from './components/MainBox_1_1';
import MainBox_2_1 from './components/MainBox_2_1';
import MainBox_1_2 from './components/MainBox_1_2';
import MainBox_3_1 from './components/MainBox_3_1';
import MainBox_3_2 from './components/MainBox_3_2';
export default {
  name: 'Epidemic',
  components: {
    MainBox_1_1,
    MainBox_2_1,
    MainBox_1_2,
    MainBox_3_1,
    MainBox_3_2
  }
};
</script>

<style lang="scss" scoped>
.main-box{
  ul {
    display:flex;
    flex-direction: row;
    &>li {
      margin-left:27px;
      &.middlePart{
        flex-grow: 1;
        margin-left:19px;
      }
      &:first-child{
        margin-right:24px;
      }
      &:last-child{
        margin-right:24px;
      }
    }
  }
}
</style>
