<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>云件服务</h4>
      </div>
      <div class="row">
        <p>45</p>
    </div>
    <div class='lmask' id="mask">
      <span>Loading...</span>
    </div>
  </div>
  </div>
</template>
<script>
  import CommonHeader from '../CommonHeader.vue'
  import CommonFooter from '../CommonFooter.vue'
  export default {
    components: {CommonHeader,CommonFooter},
  }
</script>
