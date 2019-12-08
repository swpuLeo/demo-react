import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Detail/Banner'
import Header from '../components/Detail/Header'
import List from '../components/Detail/List'

export default class Detail extends Component {
  render() {
    return (
      <>
        <Banner />
        <Header />
        <List />
      </>
    )
  }
}
