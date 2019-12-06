import React, { Component } from 'react'
import '../../styles/index.scss'
import 'antd/dist/antd.css'
import { Carousel } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'

class Icons extends Component {
  componentWillMount() {
    this.computedPage()
  }

  constructor() {
    super()
    this.state = {
      iconList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0004',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0005',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0006',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0007',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0008',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '0009',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
        {
          id: '00010',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
        },
      ],
      pages: [[], []],
    }
  }

  computedPage() {
    this.state.iconList.forEach((item, index) => {
      const page = Math.floor(index / 8)

      if (!this.state.pages[page]) {
        this.setState(
          {
            pages: [...this.state.pages, []],
          },
          () => {
            this.state.pages[page].push(item)
            //console.log(item)
          }
        )
        //console.log(this.state.pages)
      } else {
        this.state.pages[page].push(item)
      }
    })
    //console.log(this.state.pages)
  }

  render() {
    return (
      <>
        <Carousel>
          {this.state.pages.map((item, i) => {
            return (
              <div className="icons" key={i}>
                {item.map((inneritem, j) => {
                  return (
                    <div className="icon" key={j}>
                      <div className="icon-img">
                        <img
                          className="icon-img-content"
                          src={inneritem.imgUrl}
                          alt=""
                        />
                      </div>
                      <p className="icon-name">热门景点</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </Carousel>
      </>
    )
  }
}

export default connect(
  state => ({
    ...state,
  }),
  actions
)(Icons)
