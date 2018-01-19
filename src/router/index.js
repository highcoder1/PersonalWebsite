import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home'
import Blogs from 'components/blogs'
import EditBlog from 'components/edit-blog'
import BlogView from 'components/blog-view'

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
      path: '/blogs',
      component: Blogs
    },
    {
      path: '/edit',
      component: EditBlog
    },
    {
      path: '/:year/:month/:date/:title',
      component: BlogView
    }
  ]
})
