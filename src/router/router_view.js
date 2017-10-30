import config from './route'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

const RouterWithSub = (route) => (
  <Route path={route.path} render={props => (
    <route.component { ...props } routes={route.routes}/>
  )}/>
)

const RouterView = ({routes}) => {
  let Router = config.mode === 'hash' ? HashRouter : BrowserRouter
  return (
    <Router>
      {routes.map((route, index) => (
        <RouterWithSub key={index} { ...route }/>
      ))}
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
