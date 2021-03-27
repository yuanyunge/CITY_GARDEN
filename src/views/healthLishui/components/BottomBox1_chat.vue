<template>
  <div ref="chat" class="chat" />
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-liquidfill';
export default {
  props: {
    value: {
      type: Array,
      required: true
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
          type: 'liquidFill',
          radius: '75%',
          center: ['50%', '50%'],
          label: {
            normal: {
              color: '#00E4FF',
              insideColor: '#00E4FF',
              fontSize: '20px',
              position: ['50%', '75%']
            }

          },
          color: ['rgba(52, 253, 255, .2)', 'rgba(134, 228, 245, .36)', 'rgba(52, 253, 255, .2)'],
          itemStyle: {
            opacity: 0.6
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9
            }
          },
          backgroundStyle: {
            borderWidth: 2,
            borderColor: 'rgba(32, 219, 238, 1)',
            color: 'rgba(32, 219, 238, .2)'
          },
          outline: {
            show: false
          },

          data: this.value
        }]
      };
      this.chat.setOption(this.options);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
