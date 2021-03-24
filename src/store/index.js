import Vue from 'vue';
import Vuex from 'vuex';
import areaEnum from '@/api/mapCode.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dateValue: 'today',
    areaValue: 'total',
    interData: {
      todayAvgTransTime: [{}],
      todayBoxes: [{}],
      todayOverTimeTrains: [{}],
      todayReg: [{}],
      todaySamp: [{}],
      allSampRank: [{}],
      todaySampRank: [{}],
      todayTrans: [{}],
      todayTubes: [{}]
    },
    areaEnum: Object.assign({
      'total': '丽水市',
      '331102': '莲都区',
      '331103': '开发区',
      '331121': '青田县',
      '331122': '缙云县',
      '331123': '遂昌县',
      '331124': '松阳县',
      '331125': '云和县',
      '331126': '庆元县',
      '331127': '景宁县',
      '331181': '龙泉市'
    }, areaEnum)
  },
  mutations: {
    editDateValue(state, value) {
      state.dateValue = value;
    },
    editAreaValue(state, value) {
      state.areaValue = value;
    },
    editInterData(state, value) {
      state.interData = Object.assign({}, value);
    }
  },
  actions: {
    editInterData({ commit }, value) {
      commit('editInterData', value);
    }
  },
  modules: {
  }
});
