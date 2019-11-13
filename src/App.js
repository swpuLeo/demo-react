import React from 'react'
import Routes from './router'
import 'antd/dist/antd.css'
import './App.css'
import './styles/index.scss'
import DevQrcode from './components/DevQrcode'

function App() {
  return (
    <div className="app">
      <Routes />
      <DevQrcode />
    </div>
  )
}

export default App
