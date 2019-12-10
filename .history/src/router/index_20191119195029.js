import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import test from '@/components/test'
import test2 from '@/components/test2'
import upload from '@/components/upload'
import Table from '@/components/Table'
import Search from '@/components/Search'
import table3 from '@/components/table3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/test',
          name: 'test',
          component: test,
        },
        {
          path: '/upload',
          name: 'upload',
          component: upload,
        },
        {
          path: '/test2',
          name: 'test2',
          component: test2,
        },
        {
          path: '/Table',
          name: 'Table',
          component: Table,
        },
        {
          path: '/table3',
          name: 'table3',
          component: table3,
        },
        {
          path: '/Search',
          name: 'Search',
          component: Search,
        },

      ]
    },
    
  ]
})
