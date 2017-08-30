<template>
  <div>
    <div id="fullpage">
      <div class="section active" id="section0">
        <div id="top-menu">
          <nav class="navbar navbar-default">
            <div class="container" style="width: 100%">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <img src="../assets/whutlogo-w.png">
              </div>

              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <li @click="login" style="cursor: pointer"><a>登录</a></li>
                  <li @click="register" style="cursor: pointer"><a>注册</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="content">
          <h1 style="color: white">上海应用技术大学</h1>
          <h2 style="color: white">大数据实验教学平台</h2>
          <ul class="service" style="list-style: none;display: inline-block;padding: 0px">
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
          </ul>
        </div>
      </div>

      <div class="section" id="section1">
        <div class="container" style="padding-top: 90px">
          <h1>为你提供所需的一切</h1>
          <div class="row" style="margin-top: 50px">
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/matlab.jpeg">
                <p>MATLAB</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/autocad.png">
                <p>AUTOCAD</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/eclipse.png">
                <p>ECLIPSE</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/netbeans.png">
                <p>NETBEANS</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/terminal.ico">
                <p>终端操作</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/python.png">
                <p>数据分析</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/file.jpeg">
                <p>文件管理</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-3">
              <div class="block">
                <img src="../assets/welcome/games.png">
                <p>在线游戏</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="section" id="section2">
        <div style="padding-top: 90px">
          <h2 style="margin-left: 100px;margin-bottom: 20px">即搜即用，秒级启动</h2>
          <h2 style="margin-left: 100px">随时回到工作状态</h2>
          <img style="max-width: 80%; display: block;margin: auto" src="../assets/welcome/section2.png">
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import router from '../router'
  import CommonFooter from './CommonFooter.vue'
  export default{
    name: 'welcome',
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
      $(document).ready(function() {
        $('#fullpage').fullpage({
          verticalCentered: false
        });
      });
    },
    components:{CommonFooter}
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
    background-image: url(../assets/welcome/background.jpg);
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
