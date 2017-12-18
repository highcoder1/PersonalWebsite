import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Blog from '../components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      component: Blog
    }
  ]
})
