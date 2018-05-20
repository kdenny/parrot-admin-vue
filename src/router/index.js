import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Properties from '@/components/Properties'
import Floorplans from '@/components/Floorplans'
import FloorplanDetail from '@/components/FloorplanDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/property/:propertyId',
      name: 'Floorplans',
      component: Floorplans
    },
    {
      path: '/floorplan/:floorplanId',
      name: 'FloorplanDetail',
      component: FloorplanDetail
    }
  ]
})
