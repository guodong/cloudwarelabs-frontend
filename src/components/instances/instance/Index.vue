<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader.vue'
  export default {
    components: {CommonHeader},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
