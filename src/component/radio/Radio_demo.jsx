/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import {Radio} from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const Radio_demo = React.createClass({
    getInitialState () {
      return({
        value: 1,
        buttonValue: "a"
      });
    },
    handleChange(e) {
      console.log('Radio Checked ', e.target.value);
      this.setState({value: e.target.value});
    },
    handleButtonChange(e) {
      this.setState({buttonValue: e.target.value});
    },

    render () {
        return (
            <div>
              <RadioGroup onChange={this.handleChange} value={this.state.value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </RadioGroup>

              <RadioGroup size="small"  onChange={this.handleButtonChange}　defaultValue={this.state.buttonValue}>
                <RadioButton value="a">上海</RadioButton>
                <RadioButton value="b">北京</RadioButton>
                <RadioButton value="c">深圳</RadioButton>
                <RadioButton value="d">广州</RadioButton>
              </RadioGroup>

            </div>
        );
    }
});
export default Radio_demo;

