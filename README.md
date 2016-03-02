# ant-design-demo 说明

## 遇到的问题

1. git提交不了。

由于ant-design版本更新较快，一些ES6的语法可能有些不兼容(提示说创建类时不建议用createClass)，在`git commit` 的时候会报错： 
``` command
pre-commit: We've failed to pass the specified git pre-commit hooks as the `lint`
pre-commit: hook returned an exit code (1). If you're feeling adventurous you can
pre-commit: skip the git pre-commit hooks by adding the following flags to your commit:
pre-commit: 
pre-commit:   git commit -n (or --no-verify)
pre-commit: 
pre-commit: This is ill-advised since the commit is broken.
```

`解决办法`：`git commit -n -m '提交信息'`

2. 创建jsx文件时,重复代码问题

在创建jsx文件时，需要引入react，and-design等组件，每次引入时代码时形同的，几乎每个文件都有。我们可以在编辑软件中新建文件模板，例如： 
```javascript
/**
 * Created by ${USER} on ${DATE}.
 */
import React from 'react'; 
import ReactDOM from 'react-dom';
import {Form, Input, Button, message} from 'antd';

const ${NAME} = React.createClass({
  getInitialState () {
    
  },
  handleClick() {
    
  },
  render () {
    return (
      <div>
        
      </div>
    );
  }
});
export default ${NAME};

 
```

## Develop

```
npm run dev
```

访问 http://127.0.0.1:8989 

## Build

```
npm run build
```
