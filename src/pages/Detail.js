import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Detail extends Component {
  render() {
    return (
      <>
        <div>detail</div>
        <Link to="/">返回首页</Link>
      </>
    )
  }
}
