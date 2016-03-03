/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button} from 'antd';

const Modal_demo = React.createClass({
    getInitialState () {
      return({visitble: false});
    },
    handleClick() {
      this.setState({visible: true});
    },
    handleOk() {
      console.log('确定');
      this.setState({visible: false});
    },
    handleCancel() {
      console.log('取消');
      this.setState({visible: false});
    },
    render () {
        return (
            <div>
              <Button type="dashed" onClick={this.handleClick}>显示对话框</Button>
              <Modal　
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                title="对话框标题" >
                <div>我是弹出框内容</div>
                <div>我是弹出框内容</div>
                <div>我是弹出框内容</div>
              </Modal>
            </div>
        );
    }
});
export default Modal_demo;

