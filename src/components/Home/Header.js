import React, { Component } from 'react';
import '../../styles/index.scss';
import 'antd/dist/antd.css';
import { Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Search } = Input;

export default class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="header-left">
                    <div class="left-icon">
                        <Icon type="left" />
                    </div>
                </div>
                <div class="header-input">
                    <Search
                        placeholder="输入城市/景点/游玩主题"
                    />
                </div>
                <Link to="/arealist">
                    <div class="header-right">城市<Icon type="caret-down" /></div>
                </Link>

            </div>
        )
    }
}