<template>
  <div>
    <!--<router-view></router-view>-->
    <common-header></common-header>
    <div id="fullpage">
      <div class="section active" id="section0">
        <!--<div id="top-menu">
          &lt;!&ndash;<nav class="navbar navbar-default">
            <div class="container" style="width: 100%">
              <div class="navbar-header">
                &lt;!&ndash;<button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>&ndash;&gt;
                &lt;!&ndash;<img src="../../assets/whutlogo-w.png">&ndash;&gt;
              </div>

              &lt;!&ndash;<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <li @click="login" style="cursor: pointer"><a>登录</a></li>
                  <li @click="register" style="cursor: pointer"><a>注册</a></li>
                </ul>
              </div>&ndash;&gt;
            </div>
          </nav>&ndash;&gt;
        </div>-->
        <div class="content">
          <!--<h1 style="color: black">上海应用技术大学</h1>
          <h2 style="color: black">大数据教学系统</h2>-->
          <!--<ul class="service" style="list-style: none;display: inline-block;padding: 0px">
            <li>
              <i class="fa fa-search" aria-hidden="true"></i>
              <p>即开即用</p>
            </li>
            <li>
              <i class="fa fa-rocket" aria-hidden="true"></i>
              <P>秒级启动</P>
            </li>
            <li style="border-right: none">
              <i class="fa fa-bar-chart" aria-hidden="true"></i>
              <p>方便管理</p>
            </li>
          </ul>-->
        </div>
      </div>

      <div class="section" id="section1">
        <div class="container" style="padding-top: 0px ">
          <h2>上海应用技术大学大数据教学系统</h2>

          <div class="row" style="margin-top: 90px">
            <h3 style="margin-left: -50%">本教学系统包括课程有</h3>
            <br>

            <br>
            <div class="col-xs-4 col-sm-3">

              <div class="block">
                <!--<img src="../assets/welcome/matlab.jpeg">
                <p>MATLAB</p>-->

                <ul>
                  <li>R语言编程基础实验</li>
                  <li>R语言统计与建模实验</li>
                  <li>Python语言编程基础实验</li>
                  <li>Python语言统计与建模实验</li>

                </ul>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <ul>
                  <li>数据探索与预处理实验</li>
                  <li>数据质量分析实验</li>
                  <li>数据特征分析实验</li>
                  <li>统计特征函数实验</li>
                  <li>统计作图函数实验</li>

                </ul>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <ul>
                  <li>数据清洗实验</li>
                  <li>数据集成实验</li>
                  <li>数据变换实验</li>
                  <li>数据规约实验</li>

                </ul>


              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <ul>
                  <li>R语言分类预测基本流程实验</li>
                  <li>R语言数据预处理实验</li>
                  <li>R语言决策树分类方法实验</li>
                  <li>R语言高级分类方法实验</li>
                  <li>R语言聚类分析实验</li>
                  <li>R语言关联分析实验</li>

                </ul>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <ul>
                  <li>Python数据分析实验</li>
                  <li>Python数据降维实验</li>
                  <li>Python聚类分析实验</li>
                  <li>Python K近邻分类实验</li>
                  <li>Python回归分析实验</li>
                  <li>Python决策树分类实验</li>

                </ul>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <ul>
                  <li>Hadoop大数据分析实验</li>
                  <li>HDFS基本操作实验</li>
                  <li>MapReduce基础实验</li>
                  <li>MapReduce高级特性实验</li>
                  <li>迭代式MapReduce程序开发实验</li>
                  <li>Hive基本操作实验</li>

                </ul>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <ul>
                  <li>大数据分析与商务智能技术</li>
                  <li>数据预处理及试探性分析</li>
                  <li>Spark大数据处理方法</li>
                  <li>Hadoop分布式集成训练</li>
                  <li>Flume回归分析实验</li>
                  <li>Kalfka分类实验</li>

                </ul>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <ul>
                  <li>数据实时流处理</li>
                  <li>分布式数据存储</li>
                  <li>分布式数据计算</li>
                  <li>高并发数据查询</li>
                 <!-- <li>Python回归分析实验</li>
                  <li>Python决策树分类实验</li>-->

                </ul>
              </div>
            </div>

            <!--<div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/file.jpeg">
                <p>文件管理</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/games.png">
                <p>在线游戏</p>
              </div>-->
            </div>
          </div>
        </div>
      </div>


      <!--<div class="section" id="section2">
        <div style="padding-top: 90px">
          <h2 style="margin-left: 100px;margin-bottom: 20px">即搜即用，秒级启动</h2>
          <h2 style="margin-left: 100px">随时回到工作状态</h2>
          <img style="max-width: 80%; display: block;margin: auto" src="../../assets/welcome/section2.png">
        </div>
      </div>-->
    </div>



</template>
<script>
  import router from '../../router'
  import CommonFooter from './../CommonFooter.vue'
  import CommonHeader from './../CommonHeader.vue'
  export default {
    /*name: 'welcome',
    methods: {
      login: function () {
        $('#fullpage').fullpage.destroy('all')
        router.push('/login')
      },
      register: function () {
        $('#fullpage').fullpage.destroy('all')
        router.push('/register')
      }
    },
    created() {
      $(document).ready(function () {
        $('#fullpage').fullpage({
          verticalCentered: false
        });
      });*/
    /*},*/
    components: {CommonFooter,CommonHeader}
  }
</script>


<style scoped>

  * {
    box-sizing: border-box;
  }

  #top-menu {
    position: fixed;
    height: 64px;
    width: 100%;
    border-bottom: 1px solid #DDD;
    background-color: #FFF;
    z-index: 100;
  }

  .section {
    text-align: center;
    background-size: cover;
  }

  #section0 {
    background-image: url(../../assets/welcome/background.jpg);
  }

  #section2 {
    text-align: left;
    background-color: #f2f2f2;
  }

  .content {
    height: 50%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
  }

  ul.service li {
    list-style: none;
    padding: 0 40px;
    margin: 30px 0;
    float: left;
    border-right: 1px dotted #BBB;
  }

  .block img {
    width: 50%;
    height: 50%;
  }

  .block p {
    font-size: 16px;
  }


</style>
