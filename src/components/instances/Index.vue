<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
    <div class="container">
      <div class="page-header">
        <h4>云件实例</h4>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="instance in instances">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="title">
                <img :src="instance.cloudware.logo">
                <h5>{{instance.cloudware.name}}</h5>
              </div>
              <div class="info">{{instance.cloudware.description}}</div>
              <div class="btn-group btn-group-justified">
                <a :href="'http://api.cloudwarelabs.org:82/ide.html?token=vfs-' + instance.id" target="_blank" class="btn btn-info"><i class="glyphicon glyphicon-list-alt"></i> IDE</a>
                <router-link :to="{name: 'instancesView', params: {id: instance.id}}" class="btn btn-success"><i class="glyphicon glyphicon-th-large"></i> 云件</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader.vue'
  import CommonFooter from '../CommonFooter.vue'
  export default {
    components: {CommonHeader,CommonFooter},
    data () {
      return {
        instances: []
      }
    },
    created() {
      this.$http.get('instances', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        this.instances = resp.body
      })
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
