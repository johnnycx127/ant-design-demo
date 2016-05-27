# 图片预览

1 引入图片预览模块

```js
import PreviewImage from 'path/preview-image/PreviewImage.jsx';
```

2 例子

```html
<PreviewImage src={text}/>
<PreviewImage src={QRCODEURL + text} width="50px" noImgSize/>
```

其实,就像使用正常的img标签一样,只是对它进行了扩展,正常的img属性都可以写.

3 参数

<table>
  <tr>
    <th>参数</th>
    <th>类型</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
      <td>src</td>
      <td>string</td>
      <td>['http://www.someimgsrc.com']</td>
      <td>必须.图片预览的资源地址</td>
  </tr>
  <tr>
    <td>imgSize</td>
    <td>string</td>
    <td>@50h_70w_1e_1c</td>
    <td>阿里云图片裁剪参数</td>
  <tr>
  <tr>
    <td>noImgSize</td>
    <td></td>
    <td></td>
    <td>如果不需要图片裁剪,添加noImgSize标记即可</td>
  </tr>
</table>
