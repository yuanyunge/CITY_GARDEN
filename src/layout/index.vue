
<template>
  <div>
    <app-head />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHead from './components/AppHead';
export default {
  name: 'Layout',
  components: {
    AppHead
  }
};
</script>

<style lang="scss" scoped>
  .main{
    margin-top:-88.8px;
  }
</style>
