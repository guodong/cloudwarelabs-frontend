// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Resource from 'vue-resource';

Vue.use(Resource);
//Vue.http.options.root = 'http://localhost:8000/v1/';
Vue.http.options.root = 'http://api.cloudwarelabs.org/v1/';
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      get API_URL() {
        return 'http://localhost:8000/v1/';
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
