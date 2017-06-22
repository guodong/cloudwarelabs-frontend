<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>我的作业</h4>
      </div>
      <div class="row">
        <div class="col-md-2">
          <h5 style="margin-top: 40px">作业列表</h5>
          <div class="list-group" >
            <button  class="list-group-item" v-for="homework in homeworkList">{{homework.title}}</button>
          </div>
        </div>
        <div class="col-md-8 col-md-offset-1">
          <h5>已提交作业</h5>
          <table class="table table-hover" >
            <thead>
            <tr>
              <th>作业名称</th>
              <th>详情描述</th>
              <th>最近提交时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="submission in submissionList">
              <td>{{submission.homework.title}}</td>
              <td>{{submission.description}}</td>
              <td>{{submission.updated_at}}</td>
              <td class="ops">
                <button class="btn btn-primary" @click="revoke(submission)">撤销</button>
              </td>
            </tr>
            </tbody>
          </table>
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
        homeworkList:[],
        submissionList:[]
      }
    },


    methods:{
      revoke(submission){
        this.$http.delete('submissions/'+submission.id, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(resp => {
          alert('撤回成功！')
          this.$http.get('submissions', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }).then(resp => {
            this.submissionList = resp.body
          })
        })
      }
    },
    created() {
      this.$http.get('homeworks', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        this.homeworkList = resp.body
      })

      this.$http.get('submissions', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        this.submissionList = resp.body
      })
    }
  }
</script>
<style scoped>

</style>
