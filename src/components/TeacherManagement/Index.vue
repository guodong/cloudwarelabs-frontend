<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>作业管理</h4>
      </div>
      <div class="row">
        <div class="col-md-2">
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="width: 100%;">
              {{currentCourse.name}}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2" style=" font-size: 16px; width:100%">
              <li v-for="course,index in courses" @click="chooseCourse(index)"><a>{{course.name}}</a></li>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" style="width: 100%">新建课程</button>
            </ul>
            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">新建课程</h4>
                  </div>
                  <div class="modal-body">
                    <div class="input-group">
                      <span class="input-group-addon" style="font-size: 16px">课程名：</span>
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addCourse()">提交</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 style="margin-top: 40px">作业列表</h5>
          <div class="list-group" >
            <button  class="list-group-item" v-for="project,index in currentCourse.projects" @click="showHomeworks(project)">{{project}}</button>
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
                      <input type="text" class="form-control">
                    </div>
                    <div class="input-group" style="margin-top: 30px">
                      <span class="input-group-addon" style="font-size: 16px">截止日期：</span>
                      <input type="text" class="form-control">
                    </div>
                    <div class="input-group" style="margin-top: 30px">
                      <span class="input-group-addon" style="font-size: 16px">作业描述：</span>
                      <textarea type="text" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addCourse()">提交</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <!--<router-view></router-view>-->
          <table class="table table-hover">
            <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>作业名称</th>
              <th>提交时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="homework in currentHomework">
              <th scope="row">{{homework.id}}</th>
              <td>{{homework.username}}</td>
              <td>{{homework.filename}}</td>
              <td>{{homework.uploaded_at}}</td>
              <td class="ops">
                <!--<router-link :to="'/management/users/' + user.id + '/edit'" title="编辑"><i class="glyphicon glyphicon-pencil"></i></router-link>-->
                <button class="btn btn-primary">执行</button>
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
        currentCourse: '',
        courses: [
          {
            name: 'matlab程序设计',
            projects: ['常量与变量','向量的生成','矩阵元素的存储次序']
          },
          {
            name: 'java程序设计',
            projects: ['Java中的类','构造方法','创建对象']
          }],
        currentHomework: '',
        homeworks: {
          '常量与变量':[{
            id: '1',
            username: '张三',
            filename: '常量与变量',
            uploaded_at: '2017-6-17 13:00'
          }, {
            id: '2',
            username: 'metiya',
            filename: '常量与变量',
            uploaded_at: '2017-6-17 1:01'
          }],
          '向量的生成':[{
            id: '1',
            username: '张三',
            filename: '向量的生成',
            uploaded_at: '2017-6-17 13:00'
          }, {
            id: '1',
            username: '李四',
            filename: '向量的生成',
            uploaded_at: '2017-6-14 11:00'
          }, {
            id: '1',
            username: '刘一鸣',
            filename: '向量的生成',
            uploaded_at: '2017-6-15 13:41'
          }],
          'Java中的类':[{
            id: '1',
            username: '张三',
            filename: 'Java中的类',
            uploaded_at: '2017-6-17 13:00'
          }, {
            id: '2',
            username: 'metiya',
            filename: 'Java中的类',
            uploaded_at: '2017-6-17 1:01'
          }],
          '构造方法':[{
            id: '1',
            username: '张三',
            filename: '构造方法',
            uploaded_at: '2017-6-17 13:00'
          }, {
            id: '1',
            username: '李四',
            filename: '构造方法',
            uploaded_at: '2017-6-14 11:00'
          }, {
            id: '1',
            username: '刘一鸣',
            filename: '构造方法',
            uploaded_at: '2017-6-15 13:41'
          }],

        }


      }
    },


    methods:{
      chooseCourse(index){
        this.currentCourse=this.courses[index];

      },
      showHomeworks(project){
        this.currentHomework=this.homeworks[project]
      },
      addCourse(){

      }
    },
    created() {
      this.currentCourse=this.courses[0]
    }
  }
</script>
<style scoped>

</style>
