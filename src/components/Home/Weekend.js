import React, { Component } from 'react'

class Weekend extends Component {
  constructor() {
    super()
    this.state = {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/98/47e8d7bdbed162.jpg_r_640x214_f6059302.jpg',
          title: '成都海昌极地海洋公园',
          desc: '蠢萌企鹅陪你嗨翻这个秋',
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/98/47e8d7bdbed162.jpg_r_640x214_f6059302.jpg',
          title: '成都海昌极地海洋公园',
          desc: '蠢萌企鹅陪你嗨翻这个秋',
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/98/47e8d7bdbed162.jpg_r_640x214_f6059302.jpg',
          title: '成都海昌极地海洋公园',
          desc: '蠢萌企鹅陪你嗨翻这个秋',
        },
      ],
    }
  }
  render() {
    return (
      <>
        <div className="weekend-wrapper">
          <div class="recommend-title">周末去哪儿</div>
          <ul>
            {this.state.recommendList.map((item, i) => {
              return (
                <li class="item" key={i}>
                  <div class="item-img-wrapper">
                    <img class="item-img" src={item.imgUrl} alt="" />
                  </div>
                  <div class="item-infor">
                    <p class="item-title" style={{ margin: 0 }}>
                      {item.title}
                    </p>
                    <p class="item-desc" style={{ margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default Weekend
