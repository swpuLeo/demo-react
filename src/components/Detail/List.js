import React, { Component } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../store/actions'
import { Item } from 'rc-menu'
class List extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
            },
            {
              title: '成人五馆联票',
            },
          ],
        },
        {
          title: '学生票',
          children: [],
        },
        {
          title: '儿童票',
          children: [],
        },
        {
          title: '特惠票',
          children: [],
        },
      ],
    }
  }

  render() {
    return (
      <>
        <div className="DetailList">
          {this.state.list.map((item, i) => {
            return (
              <div key={i}>
                <div className="item">
                  <div className="item-title">
                    <span className="item-title-icon"></span>
                    {item.title}
                  </div>
                </div>
                {item.children.map((childItem, j) => {
                  return (
                    <div className="item item-children" key={j}>
                      <div className="item-title">
                        <span className="item-title-icon"></span>
                        {childItem.title}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default List
