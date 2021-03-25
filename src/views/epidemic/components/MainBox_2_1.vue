<template>
  <div class="main_box_2">
    <div class="main_box_2_1 todayInfoDesc">
      <div class="todayInfoItem">1.2021年3月19日0-24时,丽水市无新增确诊病例,截至3月19日24年,境外病例</div>
      <div class="todayInfoItem">2.2021年3月19日0-24时,丽水市无新增确诊病例,截至3月19日24年,境外病例</div>
    </div>
    <div class="main_box_2_2 mapArea">
      <div id="lishuiMap" ref="dataMapBox" class="dataMapContainer" />
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import lishuiMap from '@/api/lishui.json';
import qingyuanMap from '@/api/qingyuan2.json';
import jingningMap from '@/api/jingning2.json';
import jinyunMap from '@/api/jinyun2.json';
import lianduMap from '@/api/liandu2.json';
import longquanMap from '@/api/longquan2.json';
import qingtianMap from '@/api/qingtian2.json';
import songyangMap from '@/api/songyang2.json';
import suichangMap from '@/api/suichang2.json';
import yunheMap from '@/api/yunhe2.json';
export default {
  data() {
    return {
      myChart: null,
      option: {},
      mapname: 'lishui',
      curMapOption: {
        zoom: 1.1,
        aspectScale: 0.9
      },
      mapJsonList: [
        {
          code: '331122',
          name: '缙云县',
          json: jinyunMap,
          aspectScale: 1,
          zoom: 1.1,
          mapname: 'jinyun'
        },
        {
          name: '莲都区',
          code: '331102',
          json: lianduMap,
          aspectScale: 1.3,
          zoom: 1.1,
          mapname: 'liandu'
        },
        {
          name: '青田县',
          code: '331121',
          json: qingtianMap,
          aspectScale: 1,
          zoom: 1.1,
          mapname: 'qingtian'
        },
        {
          name: '遂昌县',
          code: '331123',
          json: suichangMap,
          aspectScale: 1,
          zoom: 1.1,
          mapname: 'suichang'
        },
        {
          name: '松阳县',
          code: '331124',
          json: songyangMap,
          aspectScale: 1,
          zoom: 1.1,
          mapname: 'songyang'
        },
        {
          name: '云和县',
          code: '331125',
          json: yunheMap,
          aspectScale: 1,
          zoom: 1.1,
          mapname: 'yunhe'
        },
        {
          name: '庆元县',
          code: '331126',
          json: qingyuanMap,
          aspectScale: 1,
          zoom: 1.1,
          mapname: 'qingyuan'
        },
        {
          name: '景宁县',
          code: '331127',
          json: jingningMap,
          aspectScale: 0.9,
          zoom: 1.1,
          mapname: 'jingning'
        },
        {
          name: '龙泉市',
          code: '331181',
          json: longquanMap,
          aspectScale: 0.9,
          zoom: 1.1,
          mapname: 'longquan'
        }
      ],
      specialStyleOption: {
        itemStyle: {
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: 'rgb(255,183,70)' // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgb(255,130,67)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          borderColor: 'rgb(255,166,70)'
        },
        label: {
          formatter: function(params) {
            var value = params.value;
            if (isNaN(params.value)) value = 0;
            return [
              '{icon|}' + '' + '{name|' + params.name + '}',
              '{value|' + value + '}'
            ].join('\n');
          },
          rich: {
            icon: {
              backgroundColor: {
                image: '/img/01_warning.png',
                verticalAlign: 'bottom',
                lineHeight: 20,
                width: 20,
                padding: 5,
                borderColor: 'red'
              },
              marginRight: 5
            },
            name: {
              color: '#153857',
              lineHeight: 20,
              verticalAlign: 'top',
              padding: 5
            },
            value: {
              color: '#fff',
              height: 10
            }
          }
        }
      },
      seriesData: [],
      isBindEv: false
    };
  },
  computed: {
    dateValue() {
      return this.$store.state.dateValue;
    },
    interData() {
      // this.$store.state.interData
      return this.$store.state.interData;
    },
    areaValue() {
      return this.$store.state.areaValue;
    },
    areaEnum() {
      return this.$store.state.areaEnum;
    },
    mapData() {
      var sampData = {
        all: this.interData.allSamp,
        today: this.interData.todaySamp
      };
      return sampData[this.dateValue];
    }
  },

  watch: {
    interData: function(newVal) {
      if (newVal) {
        this.$nextTick(function() {
          if (!this.myChart) this.myChart = echarts.init(this.$refs.dataMapBox);
          this.myChart.showLoading({
            color: '#fff',
            maskColor: 'rgba(0, 0, 0, 0)',
            zlevel: 0
          });
          this.bindClickEvent();
          this.isBindEv = true;
          this.initChart();
        });
      }
    },
    dateValue: function(newVal) {
      if (newVal) {
        this.initChart();
      }
    }
  },
  created() {
    // this.$refs.backBtn.display='none';
  },
  mounted() {
    this.$nextTick(function() {
      this.mapJson = lishuiMap;
      this.curMapJsonInfo = {
        code: 'total',
        name: '丽水市',
        json: this.mapJson,
        aspectScale: 0.9,
        zoom: 1.1,
        mapname: 'lishui'
      };
      this.myChart = echarts.init(this.$refs.dataMapBox);
      this.bindClickEvent();
      this.isBindEv = true;
      this.myChart.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initChart();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.myChart.resize();
      };
    });
  },
  methods: {

    initChart: function() {
      var areaEnumMap = this.areaEnum;
      var that = this;
      echarts.registerMap(this.mapname, this.mapJson);
      this.seriesData = this.initMapSeriesData(this.curMapJsonInfo);
      this.myChart.hideLoading();
      this.option = {
        backgroundColor: 'transparent',
        title: {
          show: false,
          top: 20,
          subtext: '',
          x: 'center',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return areaEnumMap[params.name] + ' : ' + params.value;
          }
        },
        geo: {
          map: this.mapname,
          aspectScale: this.curMapOption.aspectScale, // 长宽比
          zoom: this.curMapOption.zoom,
          roam: false,
          show: true,
          label: {
            show: true,
            textStyle: {
              color: '#153857'
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(66, 225, 166, 0)',

              borderWidth: 2,
              borderColor: '#fff'
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
              }
            }
          }
        },
        series: [
          {
            type: 'map',
            aspectScale: this.curMapOption.aspectScale,
            label: {
              show: true,
              textStyle: {
                color: '#FDFFFE',
                fontSize: '1rem'
              },
              formatter: function(params) {
                let str = '';
                if (that.mapname === 'lishui') {
                  str = [
                    '{name|' + areaEnumMap[params.name] + '}'
                  ].join('\n');
                } else {
                  str = '{default|' + params.value + '}';
                }
                return str;
              },
              rich: {
                icon: {
                  backgroundColor: {
                    image: '/img/01_warning.png'
                  }
                },
                name: {
                  color: '#FDFFFE',
                  lineHeight: 20,
                  fontSize: '1rem'
                },
                default: {
                  color: '#fff',
                  height: 10
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 2,
                areaColor: 'rgba(66, 225, 166, 0.6)'
              },
              emphasis: {
                areaColor: 'rgba(66, 225, 166, 0.6)',
                borderWidth: 0,
                color: 'green'
              }
            },
            select: {
              itemStyle: {
                areaColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#1A82FF' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#2AA9FF' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            zoom: this.curMapOption.zoom,
            roam: false,
            map: this.mapname, // 使用
            data: this.seriesData
          }
        ]
        // visualMap: {
        //    type:'piecewise',
        //     splitNumber:3,
        //     text: ['High', 'Low'],
        //     pieces:[
        //       {min: 0, max: 100, label: '低风险'},
        //       {min: 100, max: 200, label: '中风险'},
        //       {min: 200,  label: '高风险'}
        //     ],
        //     realtime: false,
        //     calculable: false,
        //     inRange: {
        //         color: ['lightskyblue', 'yellow', 'orangered']
        //     }
        // },
      };
      this.myChart.setOption(this.option);
    },
    initMapSeriesData: function(curMapData) {
      const seriesData = [];
      let mapJsonData = {};

      const mapjson = curMapData.json;
      if (curMapData.mapname === 'lishui') {
        mapJsonData = this.interData[this.dateValue + 'Samp'][0];
      } else {
        const varikey = this.dateValue + 'Samp_' + curMapData.code;
        if (!this.interData[varikey]) mapJsonData = {};
        else mapJsonData = this.interData[varikey][0];
        for (const k in mapJsonData) {
          const key = k.slice(0, -3);
          if (!mapJsonData[key]) {
            mapJsonData[key] = mapJsonData[k];
          } else {
            mapJsonData[key] = parseInt(mapJsonData[key]) + parseInt(mapJsonData[k]);
          }
        }
      }
      for (const key in mapjson.features) {
        var dataItem = mapjson.features[key];
        var obj = {
          name: dataItem.properties.name,
          value: mapJsonData[dataItem.properties.name]
        };
        if (!obj.value) obj.value = 0;
        seriesData.push(obj);
      }
      return seriesData;
    },

    bindClickEvent: function() {
      if (this.myChart && !this.isBindEv) {
        this.myChart.on('click', (e) => {
          this.$refs.backBtn.style.display = 'block';
          var chooseName = this.mapJsonList.filter((item) => {
            return item.code == e.name;
          });
          this.curMapJsonInfo = chooseName[0];
          this.mapJson = chooseName[0].json;
          this.mapname = chooseName[0].mapname;
          this.curMapOption = {
            zoom: chooseName[0].zoom,
            aspectScale: chooseName[0].aspectScale
          };
          // this.seriesData = this.initMapSeriesData(this.curMapJsonInfo);
          // this.zoom = 1.2;
          this.initChart();
        });
      }
    }
  }
};
</script>
<style lang="scss">
.main_box_2{
    .main_box_2_1{
        width: 625px;
        height: 87px;
        background: rgba(0, 228, 255, 0.1);
        border-radius: 10px;
        padding:21px;
        .todayInfoItem{
            font-size:16px;
            font-weight:bold;
            line-height:18px;
            margin-bottom: 11px;
            color:#20DBEE;
        }
    }
    .main_box_2_2{
        width:625px;
        height:573px;
        border:1px solid red;
        .dataMapContainer{
            width:100%;
            height:100%;
        }
    }
}
</style>
