<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>作业管理</h4>
      </div>
      <div class="row">
        <div class="col-md-2">
          <!--<div class="dropdown">-->
            <!--<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="width: 100%;">-->
              <!--{{currentCourse.name}}-->
              <!--<span class="caret"></span>-->
            <!--</button>-->
            <!--<ul class="dropdown-menu" aria-labelledby="dropdownMenu2" style=" font-size: 16px; width:100%">-->
              <!--<li v-for="course,index in courses" @click="chooseCourse(index)"><a>{{course.name}}</a></li>-->
              <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" style="width: 100%">新建课程</button>-->
            <!--</ul>-->
            <!--&lt;!&ndash; Modal &ndash;&gt;-->
            <!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">-->
              <!--<div class="modal-dialog" role="document">-->
                <!--<div class="modal-content">-->
                  <!--<div class="modal-header">-->
                    <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
                    <!--<h4 class="modal-title" id="myModalLabel">新建课程</h4>-->
                  <!--</div>-->
                  <!--<div class="modal-body">-->
                    <!--<div class="input-group">-->
                      <!--<span class="input-group-addon" style="font-size: 16px">课程名：</span>-->
                      <!--<input type="text" class="form-control" placeholder="">-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="modal-footer">-->
                    <!--<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>-->
                    <!--<button type="button" class="btn btn-primary" data-dismiss="modal" @click="addCourse()">提交</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <h5 style="margin-top: 40px">作业列表</h5>
          <div class="list-group" >
            <button  class="list-group-item" v-for="homework,index in homeworkList" @click="showHomeworkUploaded(homework)">{{homework.title}}</button>
            <button  class="list-group-item btn btn-primary" data-toggle="modal" data-target="#homeworkModal" style="background-color: #0d87e9; color:white; text-align: center;">布置作业</button>

            <!-- Modal -->
            <div class="modal fade" id="homeworkModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">布置作业</h4>
                  </div>
                  <div class="modal-body">
                    <div class="input-group">
                      <span class="input-group-addon" style="font-size: 16px">作业名称：</span>
                      <input type="text" class="form-control" v-model="homework.title">
                    </div>
                    <div class="input-group" style="margin-top: 30px">
                      <span class="input-group-addon" style="font-size: 16px">作业描述：</span>
                      <textarea type="text" class="form-control" v-model="homework.description"></textarea>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="createHomework()">提交</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8 col-md-offset-1">
          <h5>提交学生列表</h5>
          <table class="table table-hover">
            <thead>
            <tr>
              <th>姓名</th>
              <th>提交时间</th>
              <th>作业描述</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="submission in submissionList">
              <!--<th scope="row">{{homework..title}}</th>-->
              <td>{{submission.user.username}}</td>
              <td>{{submission.updated_at}}</td>
              <td>{{submission.description}}</td>
              <td class="ops">
                <!--<button class="btn btn-primary">运行</button>-->
                <router-link :to="{name: 'instancesView', params: {id: submission.instance_id}}" class="btn btn-success">运行</router-link>
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
        homework: {
          title: '',
          description: ''
        },
        homeworkList: [],
        submissionList: []
      }
    },

    methods:{
      createHomework(){
        this.$http.post('homeworks',this.homework).then(resp => {
          alert('添加成功')
          this.$http.get('homeworks', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }).then(resp => {
            this.homeworkList = resp.body
          })
        }, () => {
          alert('添加失败')
        })
      },
      showHomeworkUploaded(homework){
        this.$http.get('homeworks/'+homework.id+'/submissions').then(resp => {
          this.submissionList=resp.body
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
    }
  }
</script>
<style scoped>

</style>
