<template>
  <div class="MainBox_3_1">
    <div class="MainBox_3_1-header" />
    <div>
      <div class="MainBox_3_1-sub">近3日来丽人员预测</div>
      <div class="MainBox_3_1-content part1">
        <ul>
          <li>境外来丽<span><countTo :start-val="0" :end-val="0" :duration="2000" /></span>人</li>
          <li>中高风险地区来丽<span><countTo :start-val="0" :end-val="9" :duration="2000" /></span>人</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="MainBox_3_1-sub">实际入丽人数(今日)</div>
      <div class="MainBox_3_1-content part2">
        <ul>
          <li>境外实际入丽<span><countTo :start-val="0" :end-val="97" :duration="2000" /></span>人</li>
          <li>累计<span><countTo :start-val="0" :end-val="14710" :duration="2000" /></span>人</li>
        </ul>
        <ul>
          <li>中高风险地区实际入丽<span><countTo :start-val="0" :end-val="0" :duration="2000" /></span>人</li>
          <li>累计<span><countTo :start-val="0" :end-val="0" :duration="2000" /></span>人</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="MainBox_3_1-sub" @click="dialogVisible=true">纳入管控人数</div>
      <div class="MainBox_3_1-content part3">
        <ul>
          <li>应纳入管控<span><countTo :start-val="0" :end-val="238" :duration="2000" /></span>人</li>
          <li>实际纳入管控<span><countTo :start-val="0" :end-val="238" :duration="2000" /></span>人</li>
        </ul>
        <ul>
          <li>累计管控<span><countTo :start-val="0" :end-val="156910" :duration="2000" /></span>人</li>
          <li>其中集中隔离<span><countTo :start-val="0" :end-val="20110" :duration="2000" /></span>人</li>
        </ul>
        <ul>
          <li>居家健康观察<span><countTo :start-val="0" :end-val="100430" :duration="2000" /></span>人</li>
          <li>日常健康监测<span><countTo :start-val="0" :end-val="34124" :duration="2000" /></span>人</li>
        </ul>
      </div>
    </div>
    <el-dialog
      :visible="dialogVisible"
      :show-close="false"
      :close-on-click-modal="true"
      custom-class="diaModal"
      top="0"
      @close="dialogVisible=false"
    >
      <div class="dia-header bg_img dia-epidemic" />
      <p class="dia-intro">反映全市重点人群管控情况，包括应纳入管控人数，实际纳入管控人数，累计管控人数。</p>
      <div class="dia-list">
        <ul>
          <li>来源部门：<span>市卫生健康委</span></li>
          <li>更新频率：<span>每日</span></li>
        </ul>
        <ul>
          <li>分管领导及联系方式：<span>陈国微 13957072331</span></li>
          <li>更新时间：<span>每日12点</span></li>
        </ul>
        <ul>
          <li>业务负责人及联系方式：<span>李慧龙 18805886651</span></li>
          <li>更新方式：<span>系统取数</span></li>
        </ul>
        <ul>
          <li>黄色显色值：<span>无</span></li>
          <li> 红色显色值：<span>境外入丽人员或自疫情中高风险地区来丽返丽人员未实现闭环管控人数≥1人</span></li>
        </ul>
        <ul>
          <li>黄色显色方式及措施：<span>无</span></li>
          <li> 红色显色方式及措施：<span>在该指标的右侧出现红色！</span></li>
        </ul>
      </div>
      <div class="dia-close bg_img" @click="dialogVisible=false" />
    </el-dialog>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: 'MainBox31',
  components: {
    countTo
  },
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<style lang="scss" scoped>
    .MainBox_3_1{
        width:583px;
        height:551px;
        background:  url(~@/images/epidemic/zdrqgk_bg@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        padding:71px 10px 10px 25px;
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
        cursor: pointer;
    }
    .MainBox_3_1-content{
        margin-bottom:8px;
        >ul{
            display:flex;
            flex-direction: row;
            >li{
                width:50%;
                line-height:10px;
                >span{
                    color:rgba(0, 228, 255, 1);
                    font-size:24px;
                    font-weight:800;
                }
            }
            >li:last-child{
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
    .dia-epidemic{
      width:337px;
      height:71px;
      background-image: url(~@/images/common/nrgkrs_bt@2x.png);
    }
</style>
