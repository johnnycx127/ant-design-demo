/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Pagination} from 'antd';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

class Pagination_demo extends React.Component {

    render() {
        return (
            <div>
              <Pagination style={{float: 'right',backgroundColor: 'red'}} showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
              <span style={{display: 'inline-block'}} className="ant-pagination-item ant-pagination-total">共50条记录</span>
            </div>
        );
    }
}
export default Pagination_demo;
