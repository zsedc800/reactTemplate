import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import store from './store'



if (module.hot) {
  module.hot.accept()
}

var root = document.getElementById('app')
function _render () {
  render(
    <App/>,
    root
  )
}

_render()

store.subscribe(_render)
