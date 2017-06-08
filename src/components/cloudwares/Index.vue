<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>云件服务</h4>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="cloudware in cloudwares">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="title">
                <img :src="cloudware.logo">
                <h5>{{cloudware.name}}</h5>
              </div>
              <div class="info">{{cloudware.description}}</div>
              <button class="btn btn-success btn-block" @click="run(cloudware)">立即开启</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='lmask' id="mask">
      <span>Loading...</span>
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
        cloudwares: []
      }
    },
    created() {
      this.$http.get('cloudwares').then(resp => {
        this.cloudwares = resp.body
      })
    },
    methods: {
      run(cloudware) {
        document.getElementById('mask').style.display = 'block'
        this.$http.post('instances', {cloudware_id: cloudware.id}).then(resp => {
          document.getElementById('mask').style.display = 'none'
          this.$router.push({name: 'instancesView', params: {id: resp.body.id}})
        })
      }
    }
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
  .title {
    height: 100px;
  }
  .info {
    height: 60px;
    overflow: hidden;
  }
  .lmask {
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;;
    opacity: 0.4;
  }
  .lmask.fixed {
     position: fixed;
   }
  .lmask:before {
     content: '';
     background-color: rgba(0,0,0,0);
     border: 5px solid rgba(0,183,229,0.9);
     opacity: .9;
     border-right: 5px solid rgba(0,0,0,0);
     border-left: 5px solid rgba(0,0,0,0);
     border-radius: 50px;
     box-shadow: 0 0 35px #2187e7;
     width: 50px;
     height: 50px;
     -moz-animation: spinPulse 1s infinite ease-in-out;
     -webkit-animation: spinPulse 1s infinite linear;

     margin: -25px 0 0 -25px;
     position: absolute;
     top: 50%;
     left: 50%;
   }
  .lmask:after {
     content: '';
     background-color: rgba(0,0,0,0);
     border: 5px solid rgba(0,183,229,0.9);
     opacity: .9;
     border-left: 5px solid rgba(0,0,0,0);
     border-right: 5px solid rgba(0,0,0,0);
     border-radius: 50px;
     box-shadow: 0 0 15px #2187e7;
     width: 30px;
     height: 30px;
     -moz-animation: spinoffPulse 1s infinite linear;
     -webkit-animation: spinoffPulse 1s infinite linear;

     margin: -15px 0 0 -15px;
     position: absolute;
     top: 50%;
     left: 50%;
  }

  @-moz-keyframes spinPulse {
    0% {
      -moz-transform:rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #2187e7;
    }
    50% {
      -moz-transform: rotate(145deg);
      opacity: 1;
    }
    100% {
      -moz-transform: rotate(-320deg);
      opacity: 0;
    }
  }
  @-moz-keyframes spinoffPulse {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spinPulse {
    0% {
      -webkit-transform: rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #2187e7;
    }
    50% {
      -webkit-transform: rotate(145deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-320deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes spinoffPulse {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  .lmask span {
    display: block;
    position: absolute;
    top: 55%;
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    font-size: 18px;
  }
</style>
