/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import {Switch, Icon} from 'antd';

const Switch_demo = React.createClass({

    render () {
        return (
            <div>
              <Switch defaultChecked="true" checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />}/>
            </div>
        );
    }
});
export default Switch_demo;

