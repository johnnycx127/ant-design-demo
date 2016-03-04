/**
 * Created by zjp on 16-3-2.
 */
import React from 'react';
import {Checkbox, Button} from 'antd';

const Checkbox_demo2 = React.createClass({
    getInitialState () {
      return ({
        check: true,
        disable: false
      });
    },
    toggleCheck() {
      this.setState({check: !this.state.check});
    },
    toggleDisable() {
      this.setState({disable: !this.state.disable});
    },
    handleChange () {
      this.setState({check: !this.state.check});
    },
    render () {
      const text = `${this.state.check ? '选中' : '取消'}-${this.state.disable ? '不可用' : '可用'}`;
        return (
            <div>
                <div>
                  <Checkbox checked={this.state.check} disabled={this.state.disable} onChange={this.handleChange}/>
                  {text}
                </div>
              <br/>
                <div>
                  <Button type="primary" onClick={this.toggleCheck} style={{marginRight: '10px'}}>{this.state.check ? '选中' : '取消'}</Button>
                  <Button type="primary" onClick={this.toggleDisable}>{this.state.disable ? '不可用' : '可用'}</Button>
                </div>
            </div>
        );
    }
});
export default Checkbox_demo2;
