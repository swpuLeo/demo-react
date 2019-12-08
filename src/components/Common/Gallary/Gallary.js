import React, { Component } from 'react'
import { Carousel } from 'antd'
import { connect } from 'react-redux'
import actions from '../../../store/actions'

class Gallary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_r_800x800_fa912897.jpg',
        'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_r_800x800_fa912897.jpg',
      ],
      totalPage: 0,
      currentPage: 1,
      isShow: this.props.isShow,
    }
  }

  componentDidMount() {
    this.getTotalPage()
  }

  getTotalPage() {
    let number = this.state.imgs.length
    this.setState({
      totalPage: number,
    })
  }

  onChange(a) {
    this.setState({
      currentPage: a + 1,
    })
  }

  handleClick() {
    this.setState({
      isShow: false,
    })
    console.log(this.state.isShow)
  }

  render() {
    return (
      <>
        {this.state.isShow ? (
          <div className="container" onClick={this.handleClick.bind(this)}>
            <Carousel afterChange={this.onChange.bind(this)}>
              {this.state.imgs.map((item, i) => {
                return <img className="gallary-img" src={item} alt="" key={i} />
              })}
            </Carousel>
            <div className="page">
              {this.state.currentPage}/{this.state.totalPage}
            </div>
          </div>
        ) : null}
      </>
    )
  }
}

export default connect(
  state => ({
    ...state,
  }),
  actions
)(Gallary)
