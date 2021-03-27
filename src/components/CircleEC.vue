<template>
  <div ref="chat" class="chat" />
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
    unit: {
      type: String,
      default: ''
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
      let formatter = '{d}%';
      this.unit && (formatter += '\n' + this.value + this.unit);
      this.chat.hideLoading();
      this.options = {
        color: [this.color, 'rgba(255, 255, 255, .2)'],
        series: [
          {
            type: 'pie',
            radius: ['70%', '80%'],
            center: ['50%', '50%'],
            label: {
              show: false,
              position: 'center',
              formatter: formatter,
              lineHeight: 25
            },
            labelLine: {
              show: false
            },
            startAngle: 180,
            data: [
              {
                value: this.value,
                selected: true, // 默认选中第一块
                label: {
                  show: true, // 默认显示第一块
                  fontSize: '18',
                  fontWeight: '600',
                  color: '#fff'
                }},
              { value: this.total - this.value }
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

</style>
