/**
 * Created by zjp on 16-3-2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'antd';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];



const Table_demo = React.createClass({
    render () {
        return (
          <Table dataSource={dataSource} columns={columns} />
        );
    }
});
export default Table_demo;
