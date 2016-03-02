/**
 * Created by peach on 16-3-2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox} from 'antd';

const Checkbox_demo = React.createClass({
  handleChange: function () {
    console.log(`checked = ${e.target.checked}`);
  },
  render () {
    return (
      <label>
        <Checkbox defaultChecked={false} onChange={this.handleChange} />
        Checkbox
      </label>
    );
  }
});
export default Checkbox_demo;

