/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import {Form, Input, Button, Checkbox, message} from 'antd';

const FormItem = Form.Item;
const FormCreate = Form.create;
class Input_inline extends React.Component{
//let Input_inline = React.createClass({

    handleSubmit(e) {
      e.preventDefault();//阻止默认行为：刷新

      var data = this.props.form.getFieldsValue();
      var dataStr = JSON.stringify(data,function (k,v) {
        if(typeof v === 'undefined') {
          return '';
        }
        return v;
      });
      console.log('收到表单值：', data);
      alert(data);
      alert(JSON.stringify(data));
      alert(dataStr)
      message.info(dataStr);
    }

    render () {
      const  { getFieldProps }  = this.props.form;
        return (
           <Form inline onSubmit={this.handleSubmit.bind(this)}>
             <FormItem label="账户：">
               <Input placeholder="请输入账号" {...getFieldProps('userName')} />
             </FormItem>
             <FormItem label="密码：">
               <Input placeholder="请输入密码" {...getFieldProps('password')}/>
             </FormItem>
             <FormItem>
               <Checkbox {...getFieldProps('agreement')}/>记住我
             </FormItem>
             <Button type="primary" htmlType="submit">登陆</Button>
           </Form>
        );
    }
}

Input_inline = FormCreate()(Input_inline);

export default Input_inline;

