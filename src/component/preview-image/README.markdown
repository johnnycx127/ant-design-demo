# 图片预览

1 引入图片预览模块

```js
import PreviewImage from 'path/preview-image/PreviewImage.jsx';
```

2 例子

```html
<PreviewImage imgSourceData={images2}/>
```

支持两种格式的图片数据

```js
const images = [
  {src: 'http://7xrioc.com1.z0.glb.clouddn.com/img/illustration/photographGirl.jpg'},
  {src: 'http://7xrioc.com1.z0.glb.clouddn.com/img/illustration/imaginativeChildren.jpg'},
  {src: 'http://7xrioc.com1.z0.glb.clouddn.com/img/illustration/spaceStart.jpg'}
];
const images2 = [
  'http://7xrioc.com1.z0.glb.clouddn.com/img/illustration/photographGirl.jpg',
  'http://7xrioc.com1.z0.glb.clouddn.com/img/illustration/photographGirl.jpg',
  'http://7xrioc.com1.z0.glb.clouddn.com/img/illustration/photographGirl.jpg'
];
```

3 参数

<table>
  <tr>
    <th>参数</th>
    <th>类型</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>imgSourceData</td>
    <td>array,[,,,],[{},{},{}]</td>
    <td>['http://www.someimgsrc.com']</td>
    <td>图片预览的数据源</td>
  </tr>
  <tr>
    <td>width</td>
    <td>string</td>
    <td>100</td>
    <td>规定缩略图片的大小</td>
  </tr>
</table>
