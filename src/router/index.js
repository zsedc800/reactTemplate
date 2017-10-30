import config from './route'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import React from 'react'
let routes = config.routes

const RouterWithSub = (route) => (
  <Route path={route.path} render={props => (
    <route.component { ...props } routes={route.routes}/>
  )}/>
)

const RouterView = () => {
  let Router = config.mode === 'hash' ? HashRouter : BrowserRouter
  return (
    <Router>
      <div>
        {routes.map((route, index) => (
          <RouterWithSub key={index} { ...route }/>
        ))}
      </div>
    </Router>
  )
}

const RouterSubView = ({routes}) => (
  routes.map((route, index) => (
    <RouterWithSub key={index} { ...route } />
  ))
)

export {
  RouterView,
  RouterSubView
}
