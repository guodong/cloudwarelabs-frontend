<template>
  <div class="ht100">
    <div id="particles-js" class="ht100"></div>
    <div class="loginpanel">
      <h1>大数据实验教学平台</h1>
      <div class="panel panel-primary" style="width: 50%;margin: 20px auto">
        <div class="panel-heading">
          <div class="panel-title" style="display: inline-block">登录</div>
          <div style="float:right; margin-top: 10px"><router-link to="/register" style="color: white;text-decoration: none">没有账号?</router-link>
          </div>
        </div>

        <div style="padding-top:30px" class="panel-body">

          <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>

          <form id="loginform" class="form-horizontal" role="form">

            <div style="margin-bottom: 25px;margin-right: 15px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input type="text" class="form-control" placeholder="用户名" v-model="credentials.username">
            </div>

            <div style="margin-bottom: 25px;margin-right: 15px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="password" class="form-control" placeholder="密码" v-model="credentials.password">
            </div>

            <div style="text-align: center;margin-top: 5px" class="form-group">
              <a @click="submit()" class="btn btn-primary " style="width: 50%;display: block; margin: 0 auto">登录</a><br>
              <!--<a href="#" style="display: block">忘记密码?</a>-->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router'
  export default {
    name: "login",
    data(){
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    mounted(){
      particlesJS('particles-js',
        {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#d1d1d1"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#d1d1d1",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "config_demo": {
            "hide_card": false,
            "background_color": "#f7fafc",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
          }
        }
      );
    },

    methods: {
      submit() {
        this.$http.get('token?username=' + this.credentials.username + '&password=' + this.credentials.password).then(resp => {
          localStorage.setItem('token', resp.body.token)
          //this.$http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
          this.$router.push('/introduction')
        }, () => {
          alert('用户名或密码错误')
        })
      },
      toRegister: function () {
        router.push('register')
      }
    }

  }
</script>
<style scoped>
  .ht100 {
    height: 100%;
  }

  canvas {
    display: block;
    vertical-align: bottom;
  }

  #particles-js {
    width: 100%;
    height: 100%;
  }

  .loginpanel {
    padding-top: 50px;
    width: 600px;
    position: absolute;
    top: 0px;
    left: calc((100vw - 600px) / 2);
  }
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
</style>
