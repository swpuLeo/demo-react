import React, { Component } from 'react'
//import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from '../../store/actions'

class Swiper extends Component {
  componentDidMount() {
    this.autoPlay()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  autoPlay() {
    var i = 0
    this.timer = setInterval(() => {
      if (i === 3) {
        i = 0
      }
      // console.log(i)
      this.next_pic(i++)
    }, 3000)
    //clearInterval(timer)
  }

  next_pic(i) {
    var wrap = document.querySelector('.wrap')
    var newLeft

    this.currentdot(i)
    if (wrap.style.left === '-1500px') {
      newLeft = -750
    } else {
      newLeft = parseInt(wrap.style.left) - 375
    }
    wrap.style.left = newLeft + 'px'
  }

  currentdot(i) {
    var dots = document.getElementsByTagName('b')
    dots[i].style.background = 'rgba(144, 144, 144, 0.8)' //恢复原点颜色
    i = i + 1
    if (i < 3) {
      dots[i].style.background = 'rgba(255, 255, 255, 1)' //原点当前图片
    } else if (i === 3) {
      dots[0].style.background = 'rgba(255, 255, 255, 1)'
    }
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="wrap" style={{ left: '-375px' }}>
          <img
            src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/14c86b17f55e4b639776b497178f8ef7.jpg_750x200_0d6b121a.jpg"
            alt="3"
          />
          <img
            src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/f74957827d190508c2598fb79ec36102.jpg_750x200_2960f17f.jpg"
            alt="1"
          />
          <img
            src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/a26b3b23c19843d8d8ab924c79b2c98a.jpg_750x200_f6286afb.jpg"
            alt="2"
          />
          <img
            src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/14c86b17f55e4b639776b497178f8ef7.jpg_750x200_0d6b121a.jpg"
            alt="3"
          />
          <img
            src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/f74957827d190508c2598fb79ec36102.jpg_750x200_2960f17f.jpg"
            alt="1"
          />
        </div>
        <p>
          <b style={{ background: 'rgba(255, 255, 255, 1)' }}></b>
          <b></b>
          <b></b>
        </p>
      </div>
    )
  }
}

export default Swiper
