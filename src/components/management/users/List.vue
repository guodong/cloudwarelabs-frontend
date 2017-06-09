<template>
  <div>
    <router-link class="btn btn-success" to="/management/users/create"><i class="glyphicon glyphicon-plus"></i> 新增用户</router-link>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>用户名</th>
        <th>角色</th>
        <th>注册时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <th scope="row">{{user.id}}</th>
        <td>{{user.username}}</td>
        <td>{{user.role}}</td>
        <td>{{user.created_at}}</td>
        <td class="ops">
          <router-link :to="'/management/users/' + user.id + '/edit'" title="编辑"><i class="glyphicon glyphicon-pencil"></i></router-link>
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
        users: []
      }
    },
    created() {
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
