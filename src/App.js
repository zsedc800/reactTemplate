import React from 'react'
import Counter from '@/components/Counter'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <BrowserRouter>
        <Route path="/" component={Counter}></Route>
      </BrowserRouter>
    )
  }
}

export default App