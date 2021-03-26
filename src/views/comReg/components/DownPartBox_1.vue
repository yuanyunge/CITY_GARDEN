<template>
  <div class="down_part_box_1 bg_img">
    <div class="down_part_box_1_header bg_img" />
    <div class="down_part_box_1_list">
      <ul>
        <li>
          <div class="legend_title">医保报销病种费用<span>TOP10</span></div>
          <el-carousel :autoplay="false" arrow="never" trigger="click">
            <el-carousel-item>
              <div class="down_part_box_1_ul">
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    肺恶性肿瘤
                  </li>
                  <li>
                    <el-progress :percentage="67.6" :show-text="false" /><div>38.30万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    颅内动脉瘤
                  </li>
                  <li>
                    <el-progress :percentage="30.04" :show-text="false" /><div>15.02万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    心房颤动
                  </li>
                  <li>
                    <el-progress :percentage="13.56" :show-text="false" /><div>6.78万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    戈谢病
                  </li>
                  <li>
                    <el-progress :percentage="12.6" :show-text="false" /><div>6.30万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    蛛网膜下腔出血
                  </li>
                  <li>
                    <el-progress :percentage="10.86" :show-text="false" /><div>5.43万元</div>
                  </li>
                </ul>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="down_part_box_1_ul">
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    肺恶性肿瘤
                  </li>
                  <li>
                    <el-progress :percentage="67.6" :show-text="false" /><div>38.30万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    颅内动脉瘤
                  </li>
                  <li>
                    <el-progress :percentage="30.04" :show-text="false" /><div>15.02万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    心房颤动
                  </li>
                  <li>
                    <el-progress :percentage="13.56" :show-text="false" /><div>6.78万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    戈谢病
                  </li>
                  <li>
                    <el-progress :percentage="12.6" :show-text="false" /><div>6.30万元</div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>1</span>
                  </li>
                  <li>
                    蛛网膜下腔出血
                  </li>
                  <li>
                    <el-progress :percentage="10.86" :show-text="false" /><div>5.43万元</div>
                  </li>
                </ul>
              </div>
            </el-carousel-item>
          </el-carousel>
        </li>
        <li>
          <div class="legend_title">医保收费类项目统计</div>
          <div class="down_part_box_1_table">
            <table>
              <thead>
                <tr><td>排名</td><td>项目类型</td><td>费用</td><td>占比(%)</td><td>同比(%)</td></tr>
              </thead>
              <tbody>
                <tr><td><div class="icon1 bg_img" /></td><td>药品费用</td><td>4.18亿元</td><td>51.07</td><td><span class="up bg_img" />6.42</td></tr>
                <tr><td><div class="icon2 bg_img" /></td><td>服务费用</td><td>48.72亿元</td><td>0.06</td><td><span class="up bg_img" />14.98</td></tr>
                <tr><td><div class="icon3 bg_img" /></td><td>诊疗费用</td><td>3.93亿元</td><td>48.05</td><td><span class="down bg_img" />-6.09</td></tr>
                <tr><td><div class="icon4 bg_img" /></td><td>材料费用</td><td>669.82亿元</td><td>0.82</td><td><span class="up bg_img" />28.90</td></tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // format(percentage) {
    //   return (percentage * 50).tofix(2) + '万元';
    // }
  }
};
</script>

<style lang="scss" scoped>
.down_part_box_1{
  width:926px;
  height:286px;
  background-image:  url(~@/images/comreg/ybjg_png@2x.png);
  padding:62px 23px 15px 23px;
  position: relative;
  .down_part_box_1_header{
    position: absolute;
    width: 227px;
    height:56px;
    background-image:  url(~@/images/comreg/ybjg_bt@2x.png);
    top:6px;
    left:0;
  }
}
.legend_title>span{
  color:rgba(32, 219, 238, 1);
}
.down_part_box_1_list>ul{
  display:flex;
  >li:last-child{
    flex-grow:1;
    margin-left:20px;
  }
  >li:first-child{
    width:450px;
  }
}
.down_part_box_1_ul{
  margin-top:19px;
}
.down_part_box_1_ul>ul{
  display:flex;
  >li{
    margin-bottom:15px;
    font-size:16px;
  }
  >li:first-child{
    width:16px;
    height:16px;
    line-height: 16px;
    background-color:rgba(250, 237, 59, 1);
    text-align:center;
    border-radius: 2px;
    color:rgba(17, 17, 17, 1);
  }
  >li:nth-child(2){
    width:115px;
    padding-right:15px;
    padding-left:8px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  >li:last-child{
    flex-grow:1;
    display: flex;
    align-items: center;
    >div:last-child{
      margin-left:10px;
    }
  }
}
.down_part_box_1_ul>ul:last-child{
  >li{
    margin-bottom: 0;
  }
}
::v-deep .el-progress-bar__inner{
  background-color: unset;
  background-image: linear-gradient(to right, #42E1A6 , #20DBEE);
}
::v-deep .el-progress-bar__outer{
  background-color:rgba(255,255,255,.2);
}
::v-deep .el-progress__text {
  color:#fff;
  font-size:16px!important;
  margin-left:15px;
}
::v-deep .el-progress{
  width:170px;
}
.down_part_box_1_ul>ul:nth-child(2)>li:first-child{
  background-color:#F3921F;
}
.down_part_box_1_ul>ul:nth-child(3)>li:first-child{
  background-color:#42E1A6;
}
.down_part_box_1_ul>ul:nth-child(4)>li:first-child{
  background-color:#20DBEE;
}
.down_part_box_1_ul>ul:nth-child(5)>li:first-child{
  background-color:#20DBEE;
}
.down_part_box_1_table{
  padding-left:12px;
  >table{
    border-collapse: collapse;
    width:100%;
    margin-top:12px;
    font-size:16px;
    >thead>tr>td{
      color:#20DBEE;
      font-weight:400;
    }
    td{
      padding:8px 0;
    }
    td:first-child{
      text-align: center;
      >div{
        width:16px;
        height:20px;
        margin:0 auto;
      }
      >div.icon1{
        background-image:  url(~@/images/comreg/sfpm1_icon@2x.png);
      }
      >div.icon2{
        background-image:  url(~@/images/comreg/sfpm2_icon@2x.png);
      }
      >div.icon3{
        background-image:  url(~@/images/comreg/sfpm3_icon@2x.png);
      }
      >div.icon4{
        background-image:  url(~@/images/comreg/sfpm4_icon@2x.png);
      }
    }
    td:last-child>span{
      display:inline-block;
      width:6px;
      height:17px;
      margin-right:10px;
      vertical-align: middle;
    }
    td:last-child>span.up{
      background-image:  url(~@/images/comreg/hjt_icon@2x.png);
    }
    td:last-child>span.down{
      background-image:  url(~@/images/comreg/ljt_icon@2x.png);
    }
    >tbody>tr>td:nth-child(4){
      color:#42E1A6;
    }
  }
}
::v-deep .el-carousel__container{
  height:200px;
}
::v-deep .el-carousel__indicators--horizontal{
  left:47%;
}
::v-deep .el-carousel__button{
  width:6px;
  height:6px;
  border-radius: 50%;
}
</style>
