/**
 * Created by peach on 16-3-2.
 */
import React from 'react';
import {Checkbox} from 'antd';

const CheckboxGroup = Checkbox.Group;

const Checkbox_demo = React.createClass({
  handleChange: function () {
    console.log(`checked = ${e.target.checked}`);
  },
  render () {
    return (
      <div>

        <label>
          <Checkbox defaultChecked={false} onChange={this.handleChange}/>
          Checkbox
        </label>
        <br/>
        <br/>
        <hr/>
        <br/>

        <div>
          <CheckboxGroup options={['苹果', '小米', '华为']} defaultValue={['苹果']} />

        </div>


      </div>

    );
  }
});
export default Checkbox_demo;

