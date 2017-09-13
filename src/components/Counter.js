import React from 'react'
import connect from '@/connect'

function mapStateToProps ({getState}) {
  return {
    value: getState().count
  }
}

function mapDispatchToProps ({dispatch}){
  return {
    increaseClick: () => dispatch({type: 'increase'})
  }
}


const {Component} = React

class Counter extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {value, increaseClick} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={increaseClick}>increase</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)