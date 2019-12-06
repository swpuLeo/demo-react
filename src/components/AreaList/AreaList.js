import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Form, Input } from 'antd'
import { Link, withRouter } from 'react-router-dom'

import Bscroll from 'better-scroll'
import { connect } from 'react-redux'
import actions from '../../store/actions'

class AreaList extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      hotCities: [],
      result: [],
      keyword: [],
    }
  }

  componentDidMount() {
    fetch('./city.json')
      .then(res => res.json())
      .then(this.handleGetCityInfo.bind(this))
    const options = {
      click: true,
    }
    const warpper = document.querySelector('.list-warp')
    this.scroll = new Bscroll(warpper, options)
  }

  handleGetCityInfo(res) {
    var data = res.data
    this.setState(
      {
        cities: data.cities,
        hotCities: data.hotCities,
      } /*,
      () => {
        const options = {
          click: true,
        }
        const warpper = document.querySelector('.list-warp')
        this.scroll = new Bscroll(warpper, options)
      }
    */
    )
  }

  handleItemTitle(e) {
    const element = document.getElementById(e.target.innerText)
    this.scroll.scrollToElement(element)
  }

  handleInput(e) {
    if (e.target.value) {
      const list = []
      for (let i in this.state.cities) {
        this.state.cities[i].forEach(value => {
          if (
            value.spell.indexOf(e.target.value) > -1 ||
            value.name.indexOf(e.target.value) > -1
          ) {
            list.push(value)
          }
        })
      }
      this.setState(
        {
          result: list,
          keyword: e.target.value,
        },
        () => {
          const options = {
            click: true,
          }
          const searchWarpper = document.querySelector('.search-content')

          this.scroll = new Bscroll(searchWarpper, options)
        }
      )
    } else {
      this.setState({
        result: [],
        keyword: [],
      })
    }
  }

  handleCityClick(city) {
    this.props.click(city)
    localStorage.setItem('city', city)
  }

  render() {
    return (
      <div class="arealist-warp">
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
            <Input
              placeholder="输入城市名或拼音"
              allowClear
              onChange={this.handleInput.bind(this)}
            />
          </div>
          {this.state.keyword.length ? (
            <div className="search-content">
              <ul>
                {this.state.result.length
                  ? this.state.result.map((item, i) => {
                      return (
                        <div key={i}>
                          <Link to="/">
                            <li
                              key={item.id}
                              className="item-name"
                              onClick={this.handleCityClick.bind(
                                this,
                                item.name
                              )}>
                              {item.name}
                            </li>
                          </Link>
                        </div>
                      )
                    })
                  : null}
                {!this.state.result.length ? '未找到' : null}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="list-warp">
          <div>
            <div>
              <div className="location">
                <div className="location-title">当前城市</div>
                <div className="name-list">
                  <div className="city-name">
                    {localStorage.getItem('city')}
                  </div>
                </div>
              </div>
              <div className="hot-city">
                <div className="hot-city-title">热门城市</div>
                <div className="name-list">
                  {this.state.hotCities.map((item, i) => {
                    return (
                      <Link to="/" key={i}>
                        <div
                          className="city-name"
                          key={item.id}
                          onClick={this.handleCityClick.bind(this, item.name)}>
                          {item.name}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className="item">
                {Object.keys(this.state.cities).map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="item-title" id={item} key={item}>
                        {item}
                      </div>
                      {//console.log(this.state.cities)
                      this.state.cities[item].map((inneritem, j) => {
                        return (
                          <Link to="/" key={j}>
                            <div
                              className="item-name"
                              key={inneritem.id}
                              onClick={this.handleCityClick.bind(
                                this,
                                inneritem.name
                              )}>
                              {inneritem.name}
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <ul className="index">
          {Object.keys(this.state.cities).map(item => {
            return (
              <li
                className="index-name"
                onClick={this.handleItemTitle.bind(this)}
                key={item}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state,
  }),
  actions
)(AreaList)
