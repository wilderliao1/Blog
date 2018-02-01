import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import Msg from '@/components/Msg'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
