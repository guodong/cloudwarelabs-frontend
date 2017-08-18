<template>
  <div>
    <common-header></common-header>
    <div class="container-fluid container-margin-bottom-compact" id="content_container">
      <div class="row">
        <!-- 课程 -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12">
              <span class="span-h2">课程</span>
            </div>

            <template v-for="item in content">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="speical speical-radius">
                  <div class="speical-content">
                    <div class="div-overflow">
                      <h3 class="text-special-default" :class="item.titleClass" v-text="item.title">
                      </h3>
                    </div>
                    <p>
                      <a :href="item.link" target="_blank" :alt="item.title"><img class="img-responsive img-rounded" :src="item.pic"></a>
                    </p>
                    <div class="div-table">
                      <p v-text="item.intro" class="div-content-cell">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import CommonHeader from '../CommonHeader.vue'
  import CommonFooter from '../CommonFooter.vue'
  export default {
    components: {CommonHeader,CommonFooter},
    data () {
      return {
        content: [
          {"isNew":true,titleClass:"",title:"数据分析与挖掘",pic:"static/course/1.jpg",intro:"关键词：数据科学、大数据、分析思维",link:"http://cl.descloud.io/bigdataexperiment/dm"},
          {"isNew":true,titleClass:"",title:"大数据技术",pic:"static/course/2.jpg",intro:"关键词：数据科学、大数据、分析思维",link:"http://cl.descloud.io/bigdataexperiment/bdm"},
          {"isNew":true,titleClass:"",title:"大数据案例分析",pic:"static/course/3.jpg",intro:"关键词：数据科学、大数据、分析思维",link:"http://cl.descloud.io/bigdataproject"},
          {"isNew":true,titleClass:"",title:"数据科学通识",pic:"static/course/datascience.png",intro:"关键词：数据科学、大数据、分析思维",link:"http://dwz.cn/5QEtI5"},
          {"isNew":false,titleClass:"",title:"大数据原理",pic:"static/course/bigdata.png",intro:"关键词：大数据、数据科学、分析思维",link:"http://dwz.cn/5QEccM"},
          {"isNew":false,titleClass:"",title:"星环Inceptor",pic:"static/course/inceptor.png",intro:"关键词：Inceptor SQL、外部连接、运维",link:"https://docs.transwarp.cn/4.8/InceptorManual-chunked.html?iframe=true"},
          {"isNew":false,titleClass:"",title:"Hadoop课程",pic:"static/course/hadoop.jpg",intro:"关键词：Hadoop、HDFS、MapReduce",link:"http://dwz.cn/5QEe2n"},
          {"isNew":false,titleClass:"",title:"Spark实战演练",pic:"static/course/spark.jpg",intro:"关键词：Spark、内存计算",link:"http://dwz.cn/5QQzLx"},
          {"isNew":false,titleClass:"",title:"SPSS",pic:"static/course/spss.png",intro:"关键词：数据管理、统计建模、数据挖掘",link:"http://dwz.cn/5QEi7N"},
          {"isNew":false,titleClass:"",title:"R语言入门基础",pic:"static/course/R.jpg",intro:"关键词：R语言安装、数据分析",link:"http://dwz.cn/5QEBcg"},
          {"isNew":false,titleClass:"",title:"数据挖掘技术",pic:"static/course/dm.jpg",intro:"关键词：数据预处理、模型、算法",link:"http://dwz.cn/5QFmFo"}
        ]
      }
    }
  }
</script>
