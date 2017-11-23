import React from 'react'
import { render } from 'react-dom'
import './index.scss'
import App from './App'
import store from './store'
import api from '@/api'



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
