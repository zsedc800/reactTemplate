import store from '@/store'
import React, { Component } from 'react'
var delayTimer = null
function connect (mapToProps, mapToDispatch) {
  var args = Array.prototype.slice.call(arguments, 0)
  return function (WrappedComp) {
    class Connect extends Component {
      constructor (props) {
        super(props)
        this.state = { allProps: { } }
      }

      componentDidMount () {
        this._updateProps()
        store.subscribe(() => {
          if (delayTimer) {
            clearTimeout(delayTimer)
            delayTimer = null
          }
          delayTimer = setTimeout(() => {
            this._updateProps()
          }, 50)
        })
      }

      _updateProps () {
        let mapState = mapToProps(store, this.props)
        let mapDispatch = mapToDispatch(store)
        this.setState({
          allProps: {
            ...mapState,
            ...mapDispatch
          }
        })
      }

      render () {
        const allProps = {
          ...this.state.allProps,
          ...this.props
        }
        return <WrappedComp {...allProps}/>
      }
    }
    return Connect
  }
}


export default connect
