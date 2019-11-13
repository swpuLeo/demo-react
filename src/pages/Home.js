import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return 'home'
  }
}

export default connect(state => ({
  ...state,
}))(Home)
