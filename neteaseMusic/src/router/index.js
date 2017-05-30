import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import about from '../pages/about'
import playlist from '../pages/playlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path:'/playlist',
      name:'playlist',
      component:playlist
    }
  ]
})
