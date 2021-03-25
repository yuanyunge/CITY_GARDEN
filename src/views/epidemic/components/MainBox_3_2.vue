<template>
  <div class="MainBox_3_2">
    <div class="MainBox_3_2-header" />
    <div class="MainBox_3_2-switch">
      <div class="jwrlry active">境外入丽人员</div><div class="kqh">中高风险入丽人员</div>
      <div class="kqh">隔离服务点人员</div><div class="kqh">进口冷链食品暴露人员</div>
      <div class="kqh">快递外卖从业人员</div>
    </div>
    <div class="MainBox_3_2-report" />
  </div>
</template>

<script>
export default {
  name: 'MainBox32'
};
</script>

<style lang="scss" scoped>
    .MainBox_3_2{
        width:583px;
        height:380px;
        background:  url(~@/images/epidemic/jcyj_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        padding:63px 10px 20px 19px;
        position: relative;
        margin-top:19px;
    }
    .MainBox_3_2-header{
        position: absolute;
        top:0;
        left:0;
        background:  url(~@/images/epidemic/jcyj_bt@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        width:206px;
        height:84px;
    }
    .MainBox_3_2-switch{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .MainBox_3_2-switch>div{
        margin-right:10px;
        height:50px;
        margin-bottom:6px;
        cursor: pointer;
        line-height:15px;
        padding:17px 0;
        text-align: center;
        color: rgba(0, 228, 255, .5);
    }
    .MainBox_3_2-switch>div.jwrlry{
        width:141px;
        height:50px;
        background:  url(~@/images/epidemic/jwrlry_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .MainBox_3_2-switch>div.kqh{
        width:190px;
        height:50px;
        background:  url(~@/images/epidemic/k_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .MainBox_3_2-switch>div.jwrlry.active{
        background:  url(~@/images/epidemic/jwrlryqh_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        color: rgba(0, 228, 255, 1);
    }
    .MainBox_3_2-switch>div.kqh.active{
        background:  url(~@/images/epidemic/kqh_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        color: rgba(0, 228, 255, 1);
    }
</style>
