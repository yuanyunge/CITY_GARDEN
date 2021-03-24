<template>
  <div class="MainBox_1_1">
    <div class="MainBox_1_1-title"></div>
    <div class="MainBox_1_1-total">
      <div class="MainBox_1_1-sub">
        <span>全球</span><span class="square"></span><span>新增确诊病例数</span><span class="square spe"></span><span>累计确诊病例数</span>
      </div>
      <div class="MainBox_1_1-report">
        <chat-report_1/>
      </div>
    </div>
    <div class="MainBox_1_1-total">
      <div class="MainBox_1_1-sub">
        <span>全球</span><span class="square"></span><span>新增境外输入确诊病例</span><span class="square spe"></span><span>新增境外输入确诊病例</span>
      </div>
      <div class="MainBox_1_1-report"></div>
    </div>
    <ul class="MainBox_1_1-bottom">
      <li>
        <p>本土无症状感染者(今日）</p>
        <div class="MainBox_1_1-progress first"><span>新增</span><span class="progress"><span style="width:0"><span class="progress-inner"></span></span></span><span class="num">0</span><span>例</span></div>
        <div class="MainBox_1_1-progress"><span>累计</span><span class="progress"><span style="width:40%"><span class="progress-inner"></span></span></span><span class="num">4363</span><span>例</span></div>
      </li>
      <li class="spe">
        <p>境外输入无症状感染者(今日）</p>
        <div class="MainBox_1_1-progress first"><span>新增</span><span class="progress"><span style="width:2%"><span class="progress-inner"></span></span></span><span class="num">8</span><span>例</span></div>
        <div class="MainBox_1_1-progress"><span>累计</span><span class="progress"><span style="width:33%"><span class="progress-inner"></span></span></span><span class="num">3984</span><span>例</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import ChatReport_1 from './ChatReport_1';
  export default {
      name:'MainBox_1_1',
      components:{
        ChatReport_1
      }
  }
</script>

<style lang="scss" scoped>
  .MainBox_1_1{
      width:614px;
      height:677px;
      background:  url(~@/images/epidemic/yqgk_bg@2x.png) center center;
      background-size: cover;
      background-repeat: no-repeat;
      padding:70px 36px 30px 27px;
      position: relative;
      .MainBox_1_1-title{
          position: absolute;
          width: 206px;
          height:84px;
          background:  url(~@/images/epidemic/yqgk_bt@2x.png) center center;
          background-size: cover;
          background-repeat: no-repeat;
          position: absolute;
          top:0;
          left:0;
      }
      .MainBox_1_1-sub{
        border-left:1px solid #42E1A6;
        padding-left:6px;
        font-size:14px;
        margin-bottom: 13px;;
        span{
          vertical-align: middle;
        }
        .square{
          width:9.4px;
          height:9.1px;
          display: inline-block;
          background-color:#42E1A6;
          margin-left:18px;
          margin-right:13px;
        }
        .square.spe{
          background-color:#20DBEE;
        }
      }
      .MainBox_1_1-bottom{
        margin-top:22px;
        display: flex;
        font-size:16px;
        flex-direction: row;
        li{
          flex-grow: 1;
          p{
            margin-top:0;
            margin-bottom: 21px;;
          }
          .MainBox_1_1-progress{
            vertical-align: middle;
            .progress{
              display: inline-block;
              width:136px;
              height:12px;
              margin:0 16px 0 13px;
              background-color: rgba(255, 255, 255, .1);
              border-radius: 6px;
              >span{
                display: inline-block;
                height:12px;
                border-radius: 6px;
                box-shadow: 0 0 10px 1px rgba(57, 255, 220, 1);
                background-color: rgba(57, 255, 220, .4);
                position: relative;
                >span.progress-inner{
                  display: inline-block;
                  width: 8px;
                  height:8px;
                  border-radius: 6px;
                  background-color:#fff!important;
                  position: absolute;
                  right: -3px;
                  top:0;
                }
              }
              
            }
            .num{
              font-size:22px;
              font-weight: 800;
              color:rgba(57, 255, 220, 1);
            }
          }
          .MainBox_1_1-progress.first{
            margin-bottom: 23px;
          }
        }
        li.spe{
          .MainBox_1_1-progress{
            .progress{
              >span{
                box-shadow: 0 0 10px 1px rgb(0, 228, 255);
                background-color: rgba(0, 228, 255,.4);
              }
            }
            .num{
              color:rgb(0, 228, 255);
            }
          }
        }
      }
  }
  .MainBox_1_1-report{
    height: 162px;
    width:100%;
  }
</style>
