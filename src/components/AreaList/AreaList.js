import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Bscroll from 'better-scroll';

const { Search } = Input;


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

                <div class="header-warp">
                    <div class="areaList-header">
                        <div class="header-left">
                            <Link to="/">
                                <div class="left-icon">
                                    <Icon type="left" />
                                </div>
                            </Link>
                        </div>
                        城市选择
                    </div>
                    <div class="areaList-input">
                        <Search
                            placeholder="输入城市名或拼音"
                        />
                    </div>
                </div>


                <div class="list-warp">
                    <div>
                        <div class="location">
                            <div class="location-title">当前城市</div>
                            <div class="name-list">
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                            </div>
                        </div>
                        <div class="hot-city">
                            <div class="hot-city-title">热门城市</div>
                            <div class="name-list">
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                                <div class="city-name">北京</div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-title" id="A">A</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                        </div>
                        <div class="item">
                            <div class="item-title" id="B">B</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                        </div>
                        <div class="item">
                            <div class="item-title" id="C">C</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                            <div class="item-name">阿坝</div>
                        </div>

                    </div>
                </div>



                <ul class="index">
                    <li onClick={this.handleItemTitle.bind(this)}>A</li>
                    <li onClick={this.handleItemTitle.bind(this)}>B</li>
                    <li onClick={this.handleItemTitle.bind(this)}>C</li>
                    <li onClick={this.handleItemTitle.bind(this)}>D</li>
                    <li onClick={this.handleItemTitle.bind(this)}>E</li>
                    <li onClick={this.handleItemTitle.bind(this)}>F</li>
                    <li onClick={this.handleItemTitle.bind(this)}>G</li>
                    <li onClick={this.handleItemTitle.bind(this)}>H</li>
                    <li onClick={this.handleItemTitle.bind(this)}>I</li>
                    <li onClick={this.handleItemTitle.bind(this)}>J</li>
                    <li onClick={this.handleItemTitle.bind(this)}>K</li>
                    <li onClick={this.handleItemTitle.bind(this)}>L</li>
                    <li onClick={this.handleItemTitle.bind(this)}>M</li>
                    <li onClick={this.handleItemTitle.bind(this)}>N</li>
                    <li onClick={this.handleItemTitle.bind(this)}>O</li>
                    <li onClick={this.handleItemTitle.bind(this)}>P</li>
                    <li onClick={this.handleItemTitle.bind(this)}>Q</li>
                    <li onClick={this.handleItemTitle.bind(this)}>R</li>
                    <li onClick={this.handleItemTitle.bind(this)}>S</li>
                    <li onClick={this.handleItemTitle.bind(this)}>T</li>
                    <li onClick={this.handleItemTitle.bind(this)}>U</li>
                    <li onClick={this.handleItemTitle.bind(this)}>V</li>
                    <li onClick={this.handleItemTitle.bind(this)}>W</li>
                    <li onClick={this.handleItemTitle.bind(this)}>X</li>
                    <li onClick={this.handleItemTitle.bind(this)}>Y</li>
                    <li onClick={this.handleItemTitle.bind(this)}>Z</li>
                </ul>

            </div>

        )
    }
}