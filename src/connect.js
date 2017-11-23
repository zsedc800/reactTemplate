import store from '@/store'
import React, { Component } from 'react'
var delayTimer = null
function connect (mapToProps, mapToDispatch=function () {}) {
  var args = Array.prototype.slice.call(arguments, 0)
  return function (WrappedComp) {
    class Connect extends Component {
      constructor (props) {
        super(props)
        let mapState = mapToProps(store, this.props)
        let mapDispatch = mapToDispatch(store) || {}
        this.state = {
          allProps: {
            ...mapState,
            ...mapDispatch
          }
        }
        this._count = 0
      }

      componentWillMount () {
        this._isMounted = true
      }

      componentDidMount () {
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

      componentWillUnmount () {
        this._isMounted = false
      }

      _updateProps () {
        let mapState = mapToProps(store, this.props)
        let mapDispatch = mapToDispatch(store) || {}
        if (this._isMounted) {
          console.log('connect', this._isMounted)
          this.setState({
            allProps: {
              ...mapState,
              ...mapDispatch
            }
          })
        }
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
