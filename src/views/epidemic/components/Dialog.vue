<template>
  <div>
    <el-dialog
      :visible="dialogVisible"
      :show-close="false"
      :close-on-click-modal="true"
      custom-class="diaModal"
      top="0"
      @close="dialogVisible=false"
    >
      <div class="dia-header bg_img dia-epidemic" />
      <p class="dia-intro">根据病例情况、重点人员管控、疫苗接种、疫情监测等4方面，对全市域疫情防控实行红、黄、绿三色分类管理，反应全市新冠病毒疫情防控总体情况。</p>
      <div class="dia-list">
        <ul>
          <li>牵头部门：<span>市卫生健康委</span></li>
          <li>协同部门：<span>市大数据局、市公安局、市场监管局</span></li>
        </ul>
        <ul>
          <li>牵头部门分管领导及联系方式：<span>陈国微 13957072331</span></li>
          <li>牵头部门业务负责人及联系方式：<span>李慧龙 18805886651</span></li>
        </ul>
        <ul>
          <li>指标数量：<span>14</span></li>
        </ul>
      </div>
      <p class="dia-note">备注：按照“应设尽设”原则，结合本页面数据统筹情况，本页面“疫苗接种”、“纳入管控人数”、“监测预警”设有显色值，具体见对应指标卡片。</p>
      <div class="dia-close bg_img" @click="dialogVisible=false" />
    </el-dialog>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
