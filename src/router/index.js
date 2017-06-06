import Vue from 'vue'
import Router from 'vue-router'
import Cloudwares from '@/components/cloudwares/Index.vue'
import Instances from '@/components/instances/Index.vue'
import InstancesView from '@/components/instances/instance/View.vue'
import Instance from '@/components/instances/instance/Index.vue'
import Welcome from '@/components/Welcome.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import UserInfoEdit from '@/components/UserInfoEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/cloudwares',
    component: Cloudwares
  }, {
    path: '/instances',
    component: Instances,
  }, {
    path: '/instances/:id',
    component: Instance,
    children: [{
      path: 'view',
      name: 'instancesView',
      component: InstancesView
    }]
  }, {
    path:'/',
    component: Welcome
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/userinfo',
    component: UserInfoEdit
  }]
})
