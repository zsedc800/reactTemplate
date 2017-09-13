import store from '@/store'
import React from 'react'

function connect () {
  var args = Array.prototype.slice.call(arguments, 0)
  
  return function (WrappedComp) {
    
    class Connect extends React.Component {
      constructor (props) {
        super(props)
      }
      
      render () {
        const state = args.reduce((preState, curEl) => {
          let state = typeof curEl === 'function' ? curEl(store) : {}
          return Object.assign(preState, state)
        }, {})
        return <WrappedComp {...state}/>
      }
    }

    return Connect

  }
}


export default connect