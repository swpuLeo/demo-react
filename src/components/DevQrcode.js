import React, { Component } from 'react'
import QrCode from 'qrcode.react'
import { Modal, Icon } from 'antd'

export default class DevQrcode extends Component {
  state = {
    qrcodeModal: false,
  }
  render() {
    const { qrcodeModal } = this.state
    return (
      <div className="dev-qrcode-wrap">
        <Icon type="qrcode" width="2em" onClick={this.toggleModal} />
        <Modal
          title="移动端测试二维码"
          wrapClassName="dev-qrcode-modal"
          visible={qrcodeModal}
          onCancel={this.toggleModal}
          footer={null}>
          <div className="qrcode">
            <QrCode
              value={process.env.REACT_APP_MOBILE_HOST}
              size={72}
              level="H"
              includeMargin
            />
            <p>扫一扫</p>
          </div>
        </Modal>
      </div>
    )
  }
  toggleModal = () => {
    let { qrcodeModal } = this.state
    qrcodeModal = !qrcodeModal
    this.setState({ qrcodeModal })
  }
}
