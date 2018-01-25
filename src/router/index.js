import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home'
import Blogs from 'components/blogs'
import EditBlog from 'components/edit-blog'
import BlogView from 'components/blog-view'
import BlogsFilter from 'components/blogs-filter'
import BlogList from 'base/blog-list'

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
      component: Blogs,
      children: [
        {
          path: '',
          component: BlogList
        },
        {
          path: ':year/:month',//前面不要加'/'，否则匹配不到
          component: BlogList
        }
      ]
    },
    {
      path: '/edit',
      component: EditBlog
    },
    {
      path: '/:year/:month/:date/:title',
      component: BlogView
    },
    {
      path: '/:year/:month',
      component: BlogsFilter
    }
  ]
})
