<template>
  <div class="row">
    <form class="form-horizontal">
      <fieldset>
        <div class="form-group">
          <label  class="col-lg-2 control-label">用户名</label>
          <div class="col-lg-6">
            <input type="text" class="form-control"  v-model="name">
          </div>
        </div>
        <div class="form-group">
          <label  class="col-lg-2 control-label">密码</label>
          <div class="col-lg-6">
            <input type="password" class="form-control"  v-model="password" placeholder="请不要少于6位">
          </div>
        </div>
        <div class="form-group">
          <label  class="col-lg-2 control-label">确认密码</label>
          <div class="col-lg-6">
            <input type="password" class="form-control"  v-model="rePassword">
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-6 col-lg-offset-2">
            <router-link class="btn btn-success" exact to="/management/users">取消</router-link>
            <button type="button" class="btn btn-primary" @click="addUser()">提交</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        password: '',
        rePassword: ''
      }
    },
    methods:{
      addUser(){
        this.$http.post('users',{username: this.name, password: this.password}).then(resp => {
          alert('添加成功')
          this.$router.push('/management/users')
        }, () => {
          alert('添加失败')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
