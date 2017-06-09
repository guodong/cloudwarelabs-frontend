<template>
  <div>
    <router-link class="btn btn-success" to="/management/cloudwares/create"><i class="glyphicon glyphicon-plus"></i> 新增云件</router-link>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>名称</th>
        <th>描述</th>
        <th>镜像</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="cloudware in cloudwares">
        <th scope="row">{{cloudware.id}}</th>
        <td>{{cloudware.name}}</td>
        <td>{{cloudware.description}}</td>
        <td>{{cloudware.image}}</td>
        <td class="ops">
          <router-link :to="'/management/cloudwares/' + cloudware.id + '/edit'" title="编辑"><i class="glyphicon glyphicon-pencil"></i></router-link>
          <router-link :to="'/management/cloudwares/' + cloudware.id + '/edit'" title="删除"><i class="glyphicon glyphicon-trash"></i></router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cloudwares: [],
        users: []
      }
    },
    created() {
      this.$http.get('cloudwares', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        this.cloudwares = resp.body
      })
      this.$http.get('users', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        this.users = resp.body
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ops a {
    margin-left: 10px;
  }
</style>
