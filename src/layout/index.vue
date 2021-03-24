
<template>
  <div>
    <app-head />
    <div>
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

<style lang="css" scoped>

</style>
