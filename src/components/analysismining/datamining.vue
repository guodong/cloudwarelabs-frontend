<template>
  <div>
    <!--<router-link class="btn btn-success" to="/bigdataExperiment/create"><i class="glyphicon glyphicon-plus"></i> 新增实验</router-link>-->
    <table class="table table-hover">
      <thead>
      <tr>
        <th>实验名称</th>
        <th>描述</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="experiment in experiments">
        <th scope="row">{{experiment.title}}</th>
        <td>{{experiment.description}}</td>
        <td class="ops">
          <a :href="experiment.link" target="_blank"><i class="glyphicon glyphicon-pencil"></i></a>
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
        experiments: [
          {title:"分类预测基本流程实验",description:"分类预测基本流程",link:"/static/amExperiments/dataPretreatment/R_dataIntegration/R_dataIntegration.html"},
          {title:"数据预处理实验",description:"数据预处理",link:"/static/amExperiments/dataPretreatment/svm/svm.html"},
          {title:"决策树分类方法实验",description:"决策树分类方法",link:"/static/amExperiments/dataPretreatment/R_dataTransformation/R_dataTransformation.html"},
          {title:"高级分类方法实验",description:"高级分类方法",link:"/static/amExperiments/dataPretreatment/svm/svm.html"},
          {title:"聚类分析实验",description:"聚类分析",link:"/static/amExperiments/dataPretreatment/R_dataReduction/R_dataTransformation.html"},
          {title:"关联分析实验",description:"关联分析",link:"/static/amExperiments/dataPretreatment/svm/svm.html"},
        ]
      }
    },
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
