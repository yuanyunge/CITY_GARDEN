<template>
  <div class="chat-content">
    <div ref="chat" class="chat" />
    <div class="number">
      <span>0</span>
      <span>100</span>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: '#4BF3F9'
    }
  },
  data() {
    return {
      chat: null,
      options: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.chat = echarts.init(this.$refs.chat);
      this.chat.showLoading({
        color: '#fff',
        maskColor: 'rgba(0, 0, 0, 0)',
        zlevel: 0
      });
      this.initChartFn();
      const resizeFun = window.onresize || function() {};
      window.onresize = () => {
        resizeFun();
        this.chat.resize();
      };
    });
  },
  methods: {
    initChartFn: function() {
      this.chat.hideLoading();
      this.options = {
        series: [{
          name: '一般',
          type: 'pie',
          startAngle: 0,
          tooltip: {
          },
          radius: ['50%', '80%'],
          center: ['50%', '60%'],
          label: {
            show: false,
            position: 'center',
            formatter: (params) => { return params.percent * 2 + '%' },
            lineHeight: 25
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: this.total,
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0)'
              }
            }
          },
          {
            value: this.value,
            selected: true,
            itemStyle: {
              normal: {
                color: this.color
              }
            },
            label: {
              show: true, // 默认显示第一块
              fontSize: '18',
              fontWeight: '600',
              color: this.color
            }

          },
          {
            value: this.total - this.value,
            itemStyle: {
              normal: {
                color: 'rgba(255, 255, 255, .2)'
              }
            }
          }

          ]
        }
        ]
      };
      this.chat.setOption(this.options);
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-content{
    height:100%;
    position: relative;
}
.number{
    position: absolute;
    width:80%;
    bottom:23%;
    left:52%;
    transform:translateX(-50%);
    font-weight: bold;
    display:flex;
    justify-content:space-between;
}
.chat{
    height:100%;
}
</style>
