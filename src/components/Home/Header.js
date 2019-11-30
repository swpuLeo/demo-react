import React, { Component } from 'react'
import '../../styles/index.scss'
import 'antd/dist/antd.css'
import { Input, Icon } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'
const { Search } = Input

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="left-icon">
            <Icon type="left" />
          </div>
        </div>
        <div className="header-input">
          <Search placeholder="输入城市/景点/游玩主题" />
        </div>
        <Link to="/arealist">
          <div className="header-right">
            {this.props.city}
            <Icon type="caret-down" />
          </div>
        </Link>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state,
  }),
  actions
)(Header)
