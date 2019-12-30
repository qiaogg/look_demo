import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Relation from '@/components/Relation'
import Sortecharts from '@/components/Sortecharts'
import Sort from '@/components/Sort'
import Table from '@/components/Table'
import Search from '@/components/Search'
import Local from '@/components/Local'
import New from '@/components/New'
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
          path: '/Sortecharts',
          name: 'Sortecharts',
          component: test2,
        },
        {
          path: '/Table',
          name: 'Table',
          component: Table,
        },
        {
          path: '/Local',
          name: 'Local',
          component: Local,
        },
        {
          path: '/Search',
          name: 'Search',
          component: Search,
        },
        {
          path: '/New',
          name: 'New',
          component: New,
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
