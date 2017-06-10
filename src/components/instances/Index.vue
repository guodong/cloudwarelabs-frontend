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
          <div class="panel panel-default cloudware-item">
            <div class="panel-body">
              <div class="title">
                <img :src="instance.cloudware.logo">
                <h5>{{instance.cloudware.name}}</h5>
              </div>
              <div class="info">{{instance.cloudware.description}}</div>
              <div class="btn-group btn-group-justified">
                <a :href="'http://' + settings.ide + '/ide.html?token=vfs-' + instance.id" target="_blank" class="btn btn-info"><i class="glyphicon glyphicon-list-alt"></i> IDE</a>
                <router-link :to="{name: 'instancesView', params: {id: instance.id}}" class="btn btn-success"><i class="glyphicon glyphicon-th-large"></i> 云件</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 new-cloudware">
          <div class="panel panel-default cloudware-item">
            <div class="panel-body">
              <router-link to="/cloudwares" class="plus">
                <div><i class="glyphicon glyphicon-plus"></i></div>

                <div class="text">创建云件</div>
              </router-link>
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
