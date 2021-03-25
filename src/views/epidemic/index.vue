<template>
  <div class="main-box">
    <ul>
      <li><MainBox_1_1 /></li>
      <li class="middlePart">
        <MainBox_2_1 />
      </li>
      <li>
        <MainBox_3_2 />
      </li>
    </ul>
  </div>
</template>

<script>
import MainBox_1_1 from './components/MainBox_1_1';
import MainBox_2_1 from './components/MainBox_2_1';
import MainBox_3_2 from './components/MainBox_3_2';

export default {
  name: 'Epidemic',
  components: {
    MainBox_1_1,
    MainBox_2_1,
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
    }
  }
}
</style>
