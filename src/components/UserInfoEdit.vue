<template>
  <div>
    <commonheader></commonheader>

    <div class="jumbotron" style="max-height: 550px;width: 80%;margin: 0 auto;border-radius: 3%">
      <div class="container info">
        <div class="row">
          <div class="col-md-3 col-sm-3 col-md-offset-2">
            <div class="list-group">
              <p style="font-size: 24px;margin-bottom: 5px"><b>账号</b></p>
              <button type="button" class="list-group-item" v-bind:class="{active:control.isActive}" @click="showInfo">个人信息</button>
              <button type="button" class="list-group-item" v-bind:class="{active:!control.isActive}" @click="showPassword">更改密码</button>
            </div>
          </div>
          <div class="col-md-5 col-sm-5 panel" v-show="control.showInfo">
            <form class="form-horizontal">
              <fieldset>
                <legend style="padding-top: 30px; width: 500px;margin: 0 auto;border-bottom: 0px">个人信息</legend>
                <div class="form-group " style=" width:400px; margin: 20px auto">
                  <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group" style=" width:400px; margin: 20px auto">
                  <input type="text" class="form-control" v-model="user.id">
                </div>
                <div class="form-group">
                  <div class="col-lg-6 col-lg-offset-6">
                    <button type="button" class="btn btn-default" style="margin-right: 20px;">取&nbsp&nbsp消</button>
                    <button type="button" class="btn btn-primary" @click="updateInfo">更&nbsp&nbsp改</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="col-md-5 col-sm-5 panel" v-show="!control.showInfo">
            <form class="form-horizontal">
              <fieldset>
                <legend style="padding-top: 30px; width: 500px;margin: 0 auto;border-bottom: 0px">更改密码</legend>
                <div class="form-group " style=" width:400px; margin: 20px auto">
                  <input type="password" class="form-control" v-model="password.oldPassword" placeholder="当前密码">
                </div>
                <div class="form-group" style=" width:400px; margin: 20px auto">
                  <input type="password" class="form-control" v-model="password.newPassword" placeholder="新密码">
                </div>
                <div class="form-group" style=" width:400px; margin: 20px auto">
                  <input type="password" class="form-control" v-model="password.rePassword" placeholder="再次输入新密码">
                </div>
                <div class="form-group">
                  <div class="col-lg-6 col-lg-offset-6">
                    <button type="button" class="btn btn-default" style="margin-right: 20px">取&nbsp&nbsp消</button>
                    <button type="button" class="btn btn-primary" @click="updatePassword">更&nbsp&nbsp改</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import commonheader from './CommonHeader.vue'
  export default{
    name: 'userinfoedit',
    data(){
      return {
        user: {},
        control:{
          showInfo:true,
          isActive:true
        },
        password:{
          oldPassword:'',
          newPassword:'',
          rePassword:''
        },

      }
    },
    components:{commonheader},
    created() {
      this.$http.get('users/current').then(resp => {
        this.user = resp.body
      })
    },
    methods:{
      showInfo:function () {
        this.control.showInfo=true
        this.control.isActive=true
      },
      showPassword:function () {
        this.control.showInfo=false
        this.control.isActive=false
      },
      updateInfo:function () {
        if(this.user.username.length<0){
          alert('用户名不能为空！')
        }
        this.$http.put('users/'+this.user.id,{id:this.user.id,username:this.user.username,password:this.user.password}).then(resp => {
          alert('更新成功')
//          this.$router.push('/cloudwares')
        }, () => {
          alert('更新失败')
        })
      },
      updatePassword:function () {
        if(this.password.newPassword !==this.password.rePassword){
          alert('两次密码不一致！')
        }
        if(this.password.newPassword.length < 6){
          alert('密码长度小于6位！')
        }
        this.$http.post('users/current/password',{oldpassword: this.password.oldPassword, newpassword:this.password.newPassword}).then(resp => {
          alert('更新成功')
          this.$router.push('/login')
        }, () => {
          alert('更新失败')
        })
      }
    }
  }
</script>
<style scoped>
  .panel {
    border: 1px;
  }
  .info {
    margin: 100px auto;
  }
</style>
