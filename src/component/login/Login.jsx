import React from 'react';
import {Form, Input, Button, Checkbox, message} from 'antd';
import aa from './captain.jpg'
import './style.less';
const FormItem = Form.Item;

const Login = React.createClass({
  mixins: [Form.ValueMixin],

  getInitialState() {
    return {
      formData: {
        userName: undefined,
        password: undefined,
        agreement: undefined,
      }
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    message.success('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function (k, v) {
        if (typeof v === 'undefined') {
          return '';
        }
        return v;
      }));
  },

  render() {
    const formData = this.state.formData;
    return (<div className="content">
      <div className="login-wrap">
        <div className="header-avatar"><img src={aa} alt=""/></div>
        <h1 className="header-title">登录</h1>
        <Form className="login-form" horizontal onSubmit={this.handleSubmit}>

          <FormItem
            id="userName"
            /*label="账户："*/>
            <Input placeholder="请输入账户名" id="userName" name="userName" onChange={this.setValue.bind(this, 'userName')} value={formData.userName}/>
          </FormItem>
          <FormItem
            id="password"
            /*label="密码："*/>
            <Input type="password" placeholder="请输入密码" id="password" name="password" onChange={this.setValue.bind(this, 'password')} value={formData.password}/>
          </FormItem>
          <Button type="primary" size="large" className="login-button fill-width" htmlType="submit">登录</Button>
        </Form>
      </div>
    </div>);
  }
});
export default Login;
