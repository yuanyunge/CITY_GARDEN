<template>
  <div class="MainBox_1_2">
    <ul>
      <li>
        <div class="MainBox_1_2-header zgfxdq" />
        <p class="MainBox_1_2-count">数量<span>0</span>人</p>
        <div class="MainBox_1_2-table">
          <table>
            <thead>
              <tr>
                <td>地区</td>
                <td>风险等级</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
      <li>
        <div class="MainBox_1_2-header yxspwpdq" />
        <p class="MainBox_1_2-count">数量<span>1</span>件</p>
        <div class="MainBox_1_2-table">
          <table>
            <thead>
              <tr>
                <td>地区</td>
                <td>类别</td>
              </tr>
            </thead>
            <tbody>
              <tr class="active">
                <td>山东烟台</td>
                <td>汽车配件</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainBox12'
};
</script>

<style lang="scss" scoped>
    .MainBox_1_2{
        margin-top:17px;
        ul{
            display:flex;
            flex-direction: row;
            justify-content:space-between;
            li{
                width:301px;
                height:256px;
                background:  url(~@/images/epidemic/zgfxdq_bg@2x.png) center center;
                background-size: cover;
                background-repeat: no-repeat;
                padding-top:68px;
                position: relative;
            }
        }
    }
    .MainBox_1_2-header{
        position: absolute;
        top:0;
        left:0;
    }
    .MainBox_1_2-header.zgfxdq{
        background:  url(~@/images/epidemic/zgfxdq_bt@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        width:207px;
        height:85px;
    }
    .MainBox_1_2-header.yxspwpdq{
        background:  url(~@/images/epidemic/yxspwpdq_bt@2x.png) center center;
        background-size: cover;
        background-repeat: no-repeat;
        width:260px;
        height:84px;
    }
    .MainBox_1_2-count{
        font-size:16px;
        padding:0 24px;
        margin:0;
        margin-bottom: 9px;
    }
    .MainBox_1_2-count>span{
        color:#F3921F;
        font-size:22px;
        font-weight:800;
        margin-left:12px;
    }
    .MainBox_1_2-table{
        table{
            width:100%;
            border-collapse:collapse;
            thead{
                tr{
                    background-color:rgba(0, 228, 255, .2);
                    font-weight: bold;
                    font-size:16px;
                }
            }
            tr{
                td{
                    width:50px;
                    text-align:center;
                    padding:10px 0;
                }
            }
            tbody>tr:nth-child(2n){
                background-color:rgba(255,255,255,.05);
            }
            tr.active{
                td{
                    color:rgba(243, 146, 31, 1);
                }
            }
        }
    }
</style>
