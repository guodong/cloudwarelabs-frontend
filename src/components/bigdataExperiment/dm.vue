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
          {title:"R语言Kmeans聚类实验",description:"Kmeans聚类",link:"/static/experiments/dm/kmeans/kmeans.html"},
          {title:"用K近邻算法实现分类实验",description:"K近邻算法",link:"/static/experiments/dm/knn/knn.html"},
          {title:"Python回归分析实验",description:"回归分析",link:"/static/experiments/dm/pythonLine/pythonLine.html"},
          {title:"Python数据降维实验",description:"数据降维",link:"/static/experiments/dm/pythonPCA/pythonPCA.html"},
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
