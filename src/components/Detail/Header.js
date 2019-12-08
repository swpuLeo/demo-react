import React, { Component } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../store/actions'
class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <div>
          <div className="header-abs">
            <Link to="/">
              <div className="left-icon">
                <Icon type="left" />
              </div>
            </Link>
          </div>
          <div className="header-fixed"></div>
        </div>
      </>
    )
  }
}

export default Header
