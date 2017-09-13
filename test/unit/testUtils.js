import TestUtils from 'react-addons-test-utils'

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Component/>)
  return renderer.getRenderOutput()
}

export { shallowRender }
