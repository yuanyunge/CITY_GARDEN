
<template>
  <div>
    <div class="head">
      <div class="head-title epidemic" />
      <div class="head-right">{{ curTime }}</div>
    </div>
  </div>
</template>

<script>
import {
  parseTime
} from '@/utils/index';
export default {
  name: 'AppHead',
  data() {
    return {
      curTime: '',
      curTimeout: null
    };
  },
  created() {
    this.countCurTime();
  },
  methods: {
    countCurTime() {
      this.curTime = parseTime(new Date(), '{y}年{m}月{d}日 周{a} {h}:{i}');
      this.curTimeout = setTimeout(this.countCurTime, 1000);
    }
  },
  destroy() {
    this.curTimeout && clearTimeout(this.curTimeout);
  }
};
</script>

<style lang="scss" scoped>
  .head{
    width:100%;
    height:192.8px;
    background:  url(~@/images/common/top@2x.png) center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    padding-top:30px;
    .head-title{
      background-size: cover;
      background-repeat: no-repeat;
      background-position:center center;
      margin:0 auto;
    }
    .comReg{
      width:151px;
      height:27px;
      background-image:  url(~@/images/common/comReg@2x.png);
    }
    .epidemic{
      width:218px;
      height:27px;
      background-image:  url(~@/images/common/mryqfk_bt@2x.png);
    }
    .head-right{
      position: absolute;
      right:28px;
      top:22px;
      font-size:20px;
      font-family: Microsoft YaHei;
    }
  }
</style>
