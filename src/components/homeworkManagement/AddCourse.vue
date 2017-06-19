<template>
  <div class="row">
    <form class="form-horizontal">
      <fieldset>
        <div class="form-group">
          <label  class="col-lg-2 control-label">课程名称：</label>
          <div class="col-lg-6">
            <input type="text" class="form-control"  v-model="name">
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-6 col-lg-offset-2">
            <router-link class="btn btn-success" exact to="/homework">取消</router-link>
            <button type="button" class="btn btn-primary" @click="addCourse()">提交</button>
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
      }
    },
    methods:{
      addCourse(){
//        this.$http.post('users',{username: this.name, password: this.password}).then(resp => {
//          alert('添加成功')
//          this.$router.push('/management/users')
//        }, () => {
//          alert('添加失败')
//        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
