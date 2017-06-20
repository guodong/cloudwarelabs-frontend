<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>我的作业</h4>
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
            </ul>
          </div>
          <h5 style="margin-top: 40px">作业列表</h5>
          <div class="list-group" >
            <button  class="list-group-item" v-for="project,index in currentCourse.projects" @click="showHomeworks(project)">{{project}}</button>
          </div>
        </div>
        <div class="col-md-8 col-md-offset-1" style="border-left: solid;">
          <!--<router-view></router-view>-->
          <h5>已提交作业</h5>
          <table class="table table-hover" >
            <thead>
            <tr>
              <th>作业名称</th>
              <th>提交时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="homework in homeworkUploaded[currentCourse.name]">
              <td>{{homework.filename}}</td>
              <td>{{homework.uploaded_at}}</td>
              <td class="ops">
                <a><i class="glyphicon glyphicon-trash"></i></a>
                <!--<button class="btn btn-primary"></button>-->
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
        currentHomework: '',
        courses: [
          {
            name: 'matlab程序设计',
            projects: ['常量与变量','向量的生成','矩阵元素的存储次序']
          },
          {
            name: 'java程序设计',
            projects: ['Java中的类','构造方法','创建对象']
          }],
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

        },
        homeworkUploaded:{
          'matlab程序设计':[{
            filename: '常量与变量',
            uploaded_at: '2017-6-17 13:00'
          }, {
            filename: '向量的生成',
            uploaded_at: '2017-6-19 11:00'
          }],
          'java程序设计':[{
            filename: 'Java中的类',
            uploaded_at: '2017-6-17 13:00'
          }, {
            filename: '构造函数',
            uploaded_at: '2017-6-11 13:20'
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
//      this.$router.push('/management/cloudwares')
      this.currentCourse=this.courses[0]
    }
  }
</script>
<style scoped>

</style>
