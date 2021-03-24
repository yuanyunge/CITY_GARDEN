<template>
  <div class="main-box">
    <ul>
      <li><main-box_1_1></main-box_1_1></li>
      <li class="middlePart">
        <main-box_2_1></main-box_2_1>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import MainBox_1_1 from './components/MainBox_1_1';
import MainBox_2_1 from './components/MainBox_2_1';
export default {
  name: 'Epidemic',
  components:{
      MainBox_1_1,
      MainBox_2_1
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
    }
  }
}
</style>
