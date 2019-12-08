import React, { Component } from 'react'
import { Icon } from 'antd'
import Gallary from '../Common/Gallary/Gallary'
import { connect } from 'react-redux'
import actions from '../../store/actions'
class Banner extends Component {
  constructor() {
    super()
    this.state = {
      isShow: 0,
    }
  }
  handleClick() {
    this.setState({
      isShow: !this.state.isShow,
    })
    console.log(this.state.isShow)
  }

  render() {
    return (
      <>
        <div>
          <div className="banner" onClick={this.handleClick.bind(this)}>
            <img
              className="banner-img"
              src="http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg"
              alt=""
            />
            <div className="banner-info">
              <div className="banner-title">成都海昌极地海洋公园(AAAA景区)</div>
              <div className="banner-number">
                <Icon type="file-image" />
                47
              </div>
            </div>
            {this.state.isShow ? <Gallary isShow={this.state.isShow} /> : null}
          </div>
        </div>
      </>
    )
  }
}

export default connect(
  state => ({
    ...state,
  }),
  actions
)(Banner)
