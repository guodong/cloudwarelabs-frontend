// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Resource from 'vue-resource';

Vue.use(Resource)

Vue.config.productionTip = false

var host = location.hostname
var api = ''
switch (host) {
  case '59.69.103.174':
    api = 'http://59.69.103.174:81/v1/'
    break
  case 'cl.descloud.io':
  case 'localhost':
    api = 'http://api.cl.descloud.io/v1/'
    break
  case '127.0.0.1':
    api = 'http://localhost:8000/v1/'
    break
  default:
    api = 'http://api.cloudwarelabs.org/v1/'
    break
}
Vue.http.options.root = api
Vue.http.interceptors.push(function(request, next) {
  request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  // continue to next interceptor
  next();
});

Vue.http.get('settings').then(resp => {
  window.settings = resp.body
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
})

