import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <div
          onClick={() => {
            this.props.add(1)
          }}>
          Hello! Click me. {this.props.num}
        </div>
        <ul>
          <li>导航</li>
          <li>
            <Link to="/arealist">to arealist</Link>
          </li>
          <li>
            <Link to="/detail">to detail</Link>
          </li>
        </ul>
      </>
    )
  }
}

export default connect(
  state => ({
    ...state,
  }),
  actions
)(Home)
