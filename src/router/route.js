import { Counter } from '@/components'
import React from 'react'
export default {
  mode: 'hash',
  routes: [{
    path: '/',
    component: Counter,
    routes: [{
      path: '/home/xx',
      component: () => (
        <h1>ederfrf</h1>
      )
    }, {
      path: '/home/yy',
      component: () => (
        <h1>xde</h1>
      )
    }, {
      path: '/home/kkk',
      component: ({ match, location, history }) => {
        console.log(match, location, history)
        return (
          <h1>trgrb</h1>
        )
      }
    }]
  }]
}
