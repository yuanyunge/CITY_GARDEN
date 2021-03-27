<template>
  <div class="BottomBox1 bg_img">
    <div class="box-title bg_img" />
    <div class="BottomBox1-ul">
      <ul>
        <li><BottomBox1_chat :value="[0.475, 0.47, 0.465]" /><div class="legend_title">家庭医生签约率</div><div class="stand">省标准90%</div></li>
        <li><BottomBox1_chat :value="[0.9, 0.895, 0.89]" /><div class="legend_title">居民电子健康档案建档率</div><div class="stand">省标准70%</div></li>
        <li><BottomBox1_chat :value="[0.475, 0.47, 0.465]" /><div class="legend_title">老年人健康管理率</div><div class="stand">省标准70%</div></li>
      </ul>
    </div>
    <div class="select">
      年份：<el-select v-model="value" class="chart_options" popper-class="chart_options_dropdown">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script>
import BottomBox1_chat from './BottomBox1_chat';
export default {
  components: {
    BottomBox1_chat
  },
  data() {
    return {
      value: '2020',
      options: [{ label: '2020年', value: 2020 }, { label: '2019年', value: 2019 }, { label: '2018年', value: 2018 }]
    };
  }
};
</script>

<style lang="scss" scoped>
.BottomBox1{
  width:633px;
  height:243px;
  background-image:  url(~@/images/healthlishui/jkfwbk_bg.png);
  padding:70px 30px 15px 40px;
  position: relative;
  .box-title{
    position: absolute;
    width: 206px;
    height:84px;
    background-image:  url(~@/images/healthlishui/jkfw_bg@2x.png);
    top:0;
    left:0;
  }
}
.BottomBox1-ul{
    height:100%;
    >ul{
        height:100%;
        display: flex;
        justify-content:space-between;
        >li{
            display: flex;
            height:100%;
            flex-direction: column;
            position: relative;
            >div:first-child{
                flex-grow: 1;
                margin-top:-15px;
            }
        }
        >li:first-child{
            width: 145px;
        }
        >li:nth-child(2){
            width: 200px;
        }
        >li:first-child{
            width: 150px;
        }
    }
}
.stand{
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 35%;
    transform:translate(-50%,-50%);
    color:#D1D1D1;
    font-size:15px;
    font-weight: 800;
}
.BottomBox1 .legend_title{
    margin-top:0;
}
.select{
    position: absolute;
    font-size: 14px;
    top:30px;
    right:35px;
    >.el-select{
        width:125px;
    }
    .el-select.chart_options .el-input__inner{
        width:100%;
    }
}
</style>
