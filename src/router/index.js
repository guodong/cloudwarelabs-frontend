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
import Management from '@/components/management/Index.vue'
import ManagementCloudwares from '@/components/management/cloudwares/Index.vue'
import ManagementCloudwaresList from '@/components/management/cloudwares/List.vue'
import ManagementCloudwaresCreate from '@/components/management/cloudwares/Create.vue'
import ManagementCloudwaresEdit from '@/components/management/cloudwares/Edit.vue'
import ManagementUsers from '@/components/management/users/Index.vue'
import ManagementUsersList from '@/components/management/users/List.vue'
import ManagementUsersCreate from '@/components/management/users/Create.vue'
import ManagementUsersEdit from '@/components/management/users/Edit.vue'
import ManagementInstances from '@/components/management/Instances.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/cloudwares',
    component: Cloudwares,
    meta: { requiresAuth: true }
  }, {
    path: '/instances',
    component: Instances,
    meta: { requiresAuth: true }
  }, {
    path: '/instances/:id',
    component: Instance,
    meta: { requiresAuth: true },
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
    component: UserInfoEdit,
    meta: { requiresAuth: true }
  }, {
    path: '/management',
    component: Management,
    meta: { requiresAuth: true },
    children: [{
      path: 'cloudwares',
      component: ManagementCloudwares,
      children: [{
        path: '',
        component: ManagementCloudwaresList
      }, {
        path: 'create',
        component: ManagementCloudwaresCreate
      }, {
        path: ':id/edit',
        component: ManagementCloudwaresEdit
      }]
    }, {
      path: 'users',
      component: ManagementUsers,
      children: [{
        path: '',
        component: ManagementUsersList
      }, {
        path: 'create',
        component: ManagementUsersCreate
      }, {
        path: ':id/edit',
        component:ManagementUsersEdit
      }]
    }, {
      path: 'instances',
      component: ManagementInstances
    }]
  }]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }

  } else {
    next() // make sure to always call next()!
  }
})

export default router
