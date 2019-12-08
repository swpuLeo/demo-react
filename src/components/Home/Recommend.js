import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Recommend extends Component {
  constructor() {
    super()
    this.state = {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '蠢萌企鹅陪你嗨翻这个秋',
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '蠢萌企鹅陪你嗨翻这个秋',
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '蠢萌企鹅陪你嗨翻这个秋',
        },
      ],
    }
  }
  render() {
    return (
      <>
        <div className="recommend-wrapper">
          <div class="recommend-title">热销推荐</div>
          <ul>
            {this.state.recommendList.map((item, i) => {
              return (
                <Link to="/detail">
                  <li class="item" key={i}>
                    <img class="item-img" src={item.imgUrl} alt="" />

                    <div class="item-infor">
                      <p class="item-title" style={{ margin: 0 }}>
                        {item.title}
                      </p>
                      <p class="item-desc" style={{ margin: 0 }}>
                        {item.desc}
                      </p>
                      <button class="item-button">查看详情</button>
                    </div>
                  </li>{' '}
                </Link>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default Recommend
