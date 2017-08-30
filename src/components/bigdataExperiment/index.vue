<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>实验列表</h4>
      </div>
      <div class="row">
        <div class="col-md-2">
          <div class="list-group">
            <router-link to="/bigdataexperiment/language" class="list-group-item">R语言编程基础</router-link>
            <router-link to="/bigdataexperiment/dm" class="list-group-item">R语言统计与建模</router-link>
            <!--<router-link to="/bigdataexperiment/bigdatae" class="list-group-item">Python语言编程基础</router-link>-->
            <router-link to="/bigdataexperiment/Pybasic" class="list-group-item">Python语言编程基础</router-link>
            <router-link to="/bigdataexperiment/bdm" class="list-group-item">Python语言统计与建模</router-link>
          </div>
        </div>
        <div class="col-md-10">
          <router-view></router-view>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader.vue'
  import CommonFooter from '../CommonFooter.vue'
  export default {
    components: {CommonHeader},
    data () {
      return {
        cloudwares: [],
        users: []
      }
    },
    created() {
      this.$router.push('/bigdataExperiment/language')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 80px;
    height: 80px;
    float: left;
  }

  h5 {
    font-size: 18px;
    padding-left: 100px;
    font-weight: bold;
  }

  .cloudware-item {
    height: 240px;
  }

  .title {
    height: 100px;
  }

  .info {
    height: 60px;
    overflow: hidden;
  }

  .new-cloudware .panel-body {
    position: relative;
    height: 100%;
  }

  .new-cloudware i {
    font-size: 42px;
  }

  .new-cloudware .text {
    font-size: 18px;
  }

  .new-cloudware .plus {
    display: block;
    margin-top: 60px;
    text-align: center;
    text-decoration: none;
  }
</style>
