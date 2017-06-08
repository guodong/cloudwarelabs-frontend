<template>
  <div id="app">
    <div class="body">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonFooter from '@/components/CommonFooter.vue'
export default {
  name: 'app',
  components: {CommonFooter}
}
</script>

<style scoped>
  body {
    background: #fefefe;
  }
  #app {
    min-height: 100%;
    position: relative;
  }
  .body {
    padding-bottom: 60px;
  }
</style>

