import React from 'react'
import expact from 'chai'
import App from '@/App.jsx'

import TestUtils from 'react-addons-test-utils'

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Component/>)
  return renderer.getRenderOutput()
}

// describe('App', () => {
//   it('should render correct contents', () => {
//   })
// })

describe('Shallow Rendering', () => {
  it('App title should be hello world', () => {
    const app = shallowRender(App)
    expect(app.props.children[0].type).to.equal('h1')
  })
})
