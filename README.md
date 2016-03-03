# ant-design-demo 说明

## 遇到的问题

#### 1. git提交不了

 由于ant-design版本更新较快，一些ES6的语法可能有些不兼容(提示说创建类时不建议用createClass)，在`git commit` 的时候会报错：
```command
pre-commit: We've failed to pass the specified git pre-commit hooks as the `lint`
pre-commit: hook returned an exit code (1). If you're feeling adventurous you can 
pre-commit: skip the git pre-commit hooks by adding the following flags to your commit: 
pre-commit:
pre-commit:   git commit -n (or --no-verify) 
pre-commit:
pre-commit: This is ill-advised since the commit is broken. 
```
 
 解决办法：`git commit -n -m '提交信息'`

#### 2. 创建jsx文件时,重复代码问题

 在创建jsx文件时，需要引入react，and-design等组件，每次引入时代码时形同的，几乎每个文件都有。我们可以在编辑软件中新建文件模板，例如： 
```javascript
/**
 * Created by ${USER} on ${DATE}.
 */
import React from 'react'; 
import ReactDOM from 'react-dom';
import {Form, Input, Button, message} from 'antd';

class ${NAME} extends React.Component{
  getInitialState () {
    return ({example: 'example'});
  }
  handleClick() {

  }
  handleChnage(){
  
  }
  render () {
    return (
      <div>

      </div>
    );
  }
}
export default ${NAME};
```

#### 3. 创建Form表单组件时，无法获取值。

(在ant design 新版本中)在创建Form表单组件时，无法获取输入的值，这时可能会报这样的错：`TypeError: Cannot read property getFieldProps of undefined`  
原因是缺少`getFieldProps`属性,需要用From.create()包装下，[官方API说明](http://ant.design/components/form/#form): 经 `Form.create()` 包装过的组件会自带 `this.props.form` 属性，直接传给 Form 即可,
例如：`Demo = Form.create()(Demo);`(Demo就是你自定义的组件名字)  
**注意**: 如果你的组件是这样创建的 `const Demo = React.createClass({......})`,就无法再包装了，因为ES6语法规定，const定义的变量不能够更改也不能被重定义。  
你可以用 `let` 创建你的组件，这样就没问题了。或者ES6的新语法，`class Demo extends React.Component{......}`，但是这时你组件上的事件可能无法正常使用，例如
找不到某些属性，这时，改变this的指向就行了onSubmit={this.handleSubmit.`bind(this)`}
 


## Develop

```
npm run dev
```

访问 http://127.0.0.1:8989 

## Build

```
npm run build
```
