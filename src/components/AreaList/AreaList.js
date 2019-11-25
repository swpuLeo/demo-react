import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Bscroll from 'better-scroll'

const { Search } = Input

export default class AreaList extends Component {
  componentDidMount() {
    const warpper = document.querySelector('.list-warp')
    const scroll = new Bscroll(warpper)
  }

  handleItemTitle(e) {
    const element = document.getElementById(e.target.innerText)
    element.scrollIntoView()
  }

  render() {
    return (
      <div>
        <div className="header-warp">
          <div className="areaList-header">
            <div className="header-left">
              <Link to="/">
                <div className="left-icon">
                  <Icon type="left" />
                </div>
              </Link>
            </div>
            城市选择
          </div>
          <div className="areaList-input">
            <Search placeholder="输入城市名或拼音" />
          </div>
        </div>

        <div>
          <div className="list-warp">
            <div>
              <div className="location">
                <div className="location-title">当前城市</div>
                <div className="name-list">
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                </div>
              </div>
              <div className="hot-city">
                <div className="hot-city-title">热门城市</div>
                <div className="name-list">
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                  <div className="city-name">北京</div>
                </div>
              </div>
              <div className="item">
                <div className="item-title" id="A">
                  A
                </div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
              </div>
              <div className="item">
                <div className="item-title" id="B">
                  B
                </div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
              </div>
              <div className="item">
                <div className="item-title" id="C">
                  C
                </div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
                <div className="item-name">阿坝</div>
              </div>
            </div>
          </div>
        </div>

        <ul className="index">
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            A
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            B
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            C
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            D
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            E
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            F
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            G
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            H
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            I
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            J
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            K
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            L
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            M
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            N
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            O
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            P
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            Q
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            R
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            S
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            T
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            U
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            V
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            W
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            X
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            Y
          </li>
          <li onClick={this.handleItemTitle.bind(this)} className="index-name">
            Z
          </li>
        </ul>
      </div>
    )
  }
}
