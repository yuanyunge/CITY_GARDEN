<template>
  <div class="MainBox_3_1">
    <div class="MainBox_3_1-header" />
    <div>
      <div class="MainBox_3_1-sub">近3日来丽人员预测</div>
      <div class="MainBox_3_1-content part1">
        <ul>
          <li>境外来丽<span>38</span>人</li>
          <li>中高风险地区来丽<span>0</span>人</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="MainBox_3_1-sub">实际入丽人数(今日)</div>
      <div class="MainBox_3_1-content part2">
        <ul>
          <li>境外实际入丽<span>97</span>人</li>
          <li>累计<span>10377</span>人</li>
        </ul>
        <ul>
          <li>中高风险地区实际入丽<span>0</span>人</li>
          <li>累计<span>0</span>人</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="MainBox_3_1-sub">纳入管控人数</div>
      <div class="MainBox_3_1-content part3">
        <ul>
          <li>应纳入管控<span>2,238</span>人</li>
          <li>实际纳入管控<span>2,238</span>人</li>
        </ul>
        <ul>
          <li>累计管控<span>15,910</span>人</li>
          <li>其中集中隔离<span>10,910</span>人</li>
        </ul>
        <ul>
          <li>居家健康观察<span>100,430</span>人</li>
          <li>日常健康监测<span>100,430</span>人</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBox31'
};
</script>

<style lang="scss" scoped>
    .MainBox_3_1{
        width:583px;
        height:551px;
        background:  url(~@/images/epidemic/zdrqgk_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        padding:71px 32px 10px 22px;
        position: relative;
    }
    .MainBox_3_1-header{
        position: absolute;
        top:0;
        left:0;
        background:  url(~@/images/epidemic/zdrqgk_bt@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        width:206px;
        height:84px;
    }
    .MainBox_3_1-sub{
        color:rgba(209, 209, 209, 1);
        padding-left:6px;
        border-left:1px solid rgba(0, 228, 255, 1);
        margin-bottom:7px;
    }
    .MainBox_3_1-content{
        margin-bottom:8px;
        ul{
            display:flex;
            flex-direction: row;
            li{
                width:50%;
                line-height:10px;
                span{
                    color:rgba(0, 228, 255, 1);
                    font-size:24px;
                    font-weight:800;
                    margin-left:12px;
                    margin-right:3px;
                }
            }
            li:last-child{
                border-left:1px dashed rgba(255, 255, 255, 1);
                padding-left:14px;
            }
        }
    }
    .MainBox_3_1-content.part1{
        width:528.6px;
        height:88.8px;
        background:  url(~@/images/epidemic/j3rllryyc_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        padding:35px 26px;
    }
    .MainBox_3_1-content.part2{
        width:527.6px;
        height:122.6px;
        background:  url(~@/images/epidemic/sjrlrs_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        padding:40px 21px 30px 21px;
    }
    .MainBox_3_1-content.part2{
        >ul:last-child{
            margin-top:20px;
        }
    }
    .MainBox_3_1-content.part3{
        width:527.6px;
        height:169.5px;
        background:  url(~@/images/epidemic/nrgkrs_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        padding:39px 15px 30px 30px;
        >ul{
            margin-bottom: 25px;
        }
    }
</style>
