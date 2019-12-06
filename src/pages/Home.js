import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'
import { Link } from 'react-router-dom'
import Header from '../components/Home/Header'
import Swiper from '../components/Home/Swiper'
import Icons from '../components/Home/Icons'
import Recommend from '../components/Home/Recommend'
import Weekend from '../components/Home/Weekend'

class Home extends Component {
  render() {
    return (
      <>
        {/*<div
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
        <div>
        </div>*/}
        <Header />
        <Swiper />
        <Icons />
        <Recommend />
        <Weekend />
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
