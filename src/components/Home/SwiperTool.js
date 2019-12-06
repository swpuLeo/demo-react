import React, { Component } from 'react'
import '../../styles/index.scss'

class SwiperTool extends Component {
  static proType = {
    children: {},
    selectedIndex: 1,
  }

  constructor(props) {
    super(props)
    this.init()
    this.state = {
      index: 0, //当前的图片索引
      time: this.props.time ? this.props.time : 0.5, //完成滚动时间
      autoPlay: true, // 是否自动轮播
      startX: '', // 手指滑动的起始点横坐标
      curX: '', // 当前滑动的位置横坐标
      moveX: '', // 滑动的距离
      continuous: this.props.continuous ? this.props.continuous : false, // 是否循环轮播
      distance: this.props.continuous ? -this.clientWidth : 0, // 当循环轮播时，默认初始滑动的一个图片的距离
      swiper: 30, //  滑动滚动触发距离
      intervalTime: this.props.intervalTime || 2000, // 间隔时间
    }
  }

  componentDidMount() {
    this.autoPlay()
  }

  componentWillUnmount() {
    this.stopPlay()
  }

  init() {
    this.clientWidth =
      this.props.width ||
      document.body.clientWidth ||
      document.documentElement.clientWidth //获取用户屏幕宽度
  }

  touchStart(e) {
    this.setState({
      time: 0,
      startX: e.touches[0].pageX,
    })
  }

  touchMove(e) {
    e.preventDefault()
    if (this.state.autoPlay) {
      this.stopPlay()
    }
    let _curX = e.touches[0].pageX,
      _moveX = _curX - this.state.startX,
      _distance = -(this.state.index * this.clientWidth - _moveX)

    this.setState({
      curX: _curX,
      moveX: _moveX,
      time: 0,
      distance: _distance,
    })
  }

  touchEnd(e) {
    if (Math.abs(this.state.moveX) <= this.state.swiper) {
      this.play('', '5')
    } else {
      if (this.state.moveX > this.state.swiper) {
        this.play('pre', '.5')
      } else if (Math.abs(this.state.moveX) > this.state.swiper) {
        this.play('next', '.5')
      }
    }
    this.setState({
      moveX: 0,
    })
  }

  autoPlay() {
    if (this.state.autoPlay) {
      this.stopPlay()
      this.timer = setInterval(() => {
        this.play('next', 0.5)
      }, this.state.intervalTime)
    }
  }

  play(go, time) {
    let _index = this.state.index
    if (go === 'next') {
      _index++
    } else if (go === 'pre') {
      _index--
    }
    //循环轮播
    if (this.state.continuous) {
      if (_index > 4 /*this.props.data.length 这里是4*/) {
        this.scrollPlay(_index, time)
        //返回第一个
        _index = 1
        setTimeout(() => {
          //500ms后立即拉回至第一张图片
          this.scrollPlay(_index, 0)
          //重新开始自动轮播
          this.setState({
            index: _index,
          })
        }, 500)
      } else if (_index < 1) {
        this.scrollPlay(_index, time)
        //返回最后一个
        _index = 4 //this.props.data.length 这里是4
        setTimeout(() => {
          this.scrollPlay(_index, 0)
          this.autoPlay()
          this.setState({
            index: _index,
          })
        }, 500)
      } else {
        this.scrollPlay(_index, time)
        this.setState({
          index: _index,
        })
      }
    } else {
      //不循环轮播
      if (_index > this.props.data.length - 1) {
        _index = 0
      } else if (_index < 0) {
        _index = this.props.data.length - 1
      }
      this.scrollPlay(_index, time)
      this.setState({ index: _index })
    }
  }
  scrollPlay(index, time) {
    this.setState({
      time: time, // 每次完成滚动的时间
      distance: -(index * this.clientWidth), // 计算滚动距离
    })
  }
  stopPlay() {
    clearInterval(this.timer)
  }
  render() {
    let data = this.props.data,
      length = 2 //这里定义icon总共占的页面数 后期可以通过计算得到

    let carouselStyle = {
      width: (length + 2) * this.clientWidth + 'px', // 轮播容器的宽度，预留两个位置，供循环轮播时放置多最后一张图片和第一张图片
      height: this.props.height ? this.props.height : null, // 轮播容器的高度
      WebkitTransform: 'translate3d(' + this.state.distance + 'px,0,0)', // 沿x轴平移
      transform: 'translate3d(' + this.state.distance + 'px,0,0)',
      WebkitTranstion: 'all ' + this.state.time + 's linear', // 过度的时间
      transition: 'all ' + this.state.time + 's linear',
      paddingBottom: 50 + '%',
    }

    return (
      <>
        <div className="icons" style={{ width: this.clientWidth }}>
          <div className="icons-wrap" style={carouselStyle}>
            {this.state.continuous ? (
              <div
                className="icons-inner-warp"
                style={{ width: this.clientWidth }}>
                <div className="icon">
                  <div className="icon-img">
                    <img
                      className="icon-img-content"
                      src={data[data.length - 1].imgUrl} //这里还可以优化计算icon的个数
                      alt=""
                    />
                  </div>
                  <p className="icon-name">热门景点</p>
                </div>
              </div>
            ) : null}
            <div
              className="icons-inner-warp"
              style={{ width: this.clientWidth }}>
              {data &&
                data.map((item, i) => {
                  return (
                    <div className="icon" key={i}>
                      <div className="icon-img">
                        <img
                          className="icon-img-content"
                          src={item.imgUrl}
                          alt=""
                          onTouchStart={e => this.touchStart(e)}
                          onTouchMove={e => this.touchMove(e)}
                          onTouchEnd={e => this.touchEnd(e)}
                        />
                      </div>
                      <p className="icon-name">热门景点</p>
                    </div>
                  )
                })}
            </div>
            {this.state.continuous ? (
              <div
                className="icons-inner-warp"
                style={{ width: this.clientWidth }}>
                <div className="icon">
                  <div className="icon-img">
                    <img
                      className="icon-img-content"
                      src={data[0].imgUrl} //这里还可以优化计算icon的个数
                      alt=""
                    />
                  </div>
                  <p className="icon-name">热门景点</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    )
  }
}

export default SwiperTool
