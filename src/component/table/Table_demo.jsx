/**
 * Created by zjp on 16-3-2.
 */
import React from 'react';
import {Table,Pagination} from 'antd';

const dataSource = [];
for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32,
    address: `西湖区湖底公园${i}号`
  });
}

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


const rowSelection = {
  onChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  }
};
const pagination = {
  total: dataSource.length,
  current: 1,
  showSizeChanger: true,
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    console.log('Current: ', current);
  }
};

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

class Table_demo extends React.Component{
    componentDidMount () {
      for (let i = 1;i < 40; i++){

      }
    }
    render () {
        return (
          <div style={{backgroundColor: '#fff',padding: '0 0 50px',borderTop: '5px solid green'}}>
            <Table rowSelection={rowSelection} agination={pagination}  dataSource={dataSource} columns={columns} bordered/>

          </div>

        );
    }
};
export default Table_demo;
