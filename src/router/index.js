import Vue from 'vue'
import Router from 'vue-router'
import Cloudwares from '@/components/cloudwares/Index.vue'
import Instances from '@/components/instances/Index.vue'
import InstancesView from '@/components/instances/instance/View.vue'
import Instance from '@/components/instances/instance/Index.vue'

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
    }
  ]
})
