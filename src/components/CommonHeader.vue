<template>
  <div>
    <div class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a href="../" class="navbar-brand">CloudwareLabs</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/instances"><a>云件实例</a></router-link>
            <router-link tag="li" to="/cloudwares"><a>云件服务</a></router-link>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="download" aria-expanded="false">admin <span class="caret"></span></a>
              <ul class="dropdown-menu" aria-labelledby="download">
                <li><a href="#">个人信息</a></li>
                <li class="divider"></li>
                <li><a href="./bootstrap.min.css">退出</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'common-header',
    data () {
      return {

      }
    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
