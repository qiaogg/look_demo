import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Relation from '@/components/Relation'
import test2 from '@/components/test2'
import Sort from '@/components/Sort'
import Table from '@/components/Table'
import Search from '@/components/Search'
import table3 from '@/components/table3'
import biao2 from '@/components/biao2'
import cloud from '@/components/cloud'
import Source from '@/components/Source'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/Relation',
          name: 'Relation',
          component: Relation,
        },
        {
          path: '/Sort',
          name: 'Sort',
          component: Sort,
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
        {
          path: '/biao2',
          name: 'biao2',
          component: biao2,
        },
        {
          path: '/cloud',
          name: 'cloud',
          component: cloud,
        },
        {
          path: '/Source',
          name: 'Source',
          component: Source,
        },

      ]
    },
    
  ]
})
