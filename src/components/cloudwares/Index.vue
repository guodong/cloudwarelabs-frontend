<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>云件服务</h4>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="cloudware in cloudwares">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="title">
                <img :src="cloudware.logo">
                <h5>{{cloudware.name}}</h5>
              </div>
              <div class="info">{{cloudware.description}}</div>
              <button class="btn btn-success btn-block" @click="run(cloudware)">立即开启</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader.vue'
  export default {
    components: {CommonHeader},
    data () {
      return {
        cloudwares: []
      }
    },
    created() {
      this.$http.get('cloudwares').then(resp => {
        this.cloudwares = resp.body
      })
    },
    methods: {
      run(cloudware) {
        this.$http.post('instances', {cloudware_id: cloudware.id}).then(resp => {
          this.$router.push({name: 'instancesView', params: {id: resp.body.id}})
        })
      }
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
  .title {
    height: 100px;
  }
  .info {
    height: 60px;
    overflow: hidden;
  }
</style>
