<template>
  <div id="app">
    <div class="body">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  body {
    background: #fefefe;
  }
  .ht100 {
    height: 100%;
  }
  #app {
    min-height: 100%;
    position: relative;
  }
  .body {
    padding-bottom: 60px;
  }
</style>

