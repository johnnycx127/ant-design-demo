/**
 * Created by peach on 16-5-26.
 */
import './style.less'
import React from 'react';
import findDOMNode from 'react-dom';
import {Form, Input, Button, message} from 'antd';
import FAIcon from '../faicon/FAIcon.jsx';
var $ = require('jquery');
//定义类 并继承baseComponent
class PreviewImage extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
  }
  // 初始化state,替代原getInitialState, 注意前面没有static
  state = {
    showPreviewImage: false,
    scaleImageSrc: '',
    previewHeight: 0,
    previewWidth: 0
  };

  componentDidMount = () => {
    let _this = this;
    let moveable = false;
    let docMouseMoveEvent = document.onmousemove;
    let docMouseUpEvent = document.onmouseup;
    let previewContent = _this.refs.previewContent; /*用于绑定事件*/
    let $previewContent = $('#previewContent'); /*用于获取dom属性值*/

    previewContent.onmousedown = function(e) {
      moveable = true;
      let evt = getEvent(e);
      let moveX = evt.clientX;
      let moveY = evt.clientY;
      let moveTop = parseInt($previewContent[0].offsetTop);
      let moveLeft = parseInt($previewContent[0].offsetLeft);
      let iWidth = document.documentElement.clientWidth;
      let iHeight = document.documentElement.clientHeight;
      document.onmousemove = function(e) {
        if (moveable){
          let evt = getEvent(e);
          let x = moveLeft + evt.clientX - moveX;
          let y = moveTop + evt.clientY - moveY;
          if ( x > 0 &&( x + $previewContent[0].offsetWidth < iWidth) && y > 0 && (y + $previewContent[0].offsetHeight < iHeight) ){
            $previewContent[0].style.left = x + "px";
            $previewContent[0].style.top = y + "px";
          }
        }
      };
      document.onmouseup = function (e){
        if (moveable) {
          document.onmousemove = docMouseMoveEvent;
          document.onmouseup = docMouseUpEvent;
          moveable = false;
        }
      };
    };
    //获得事件Event对象，用于兼容IE和FireFox
    function getEvent(e) {
      return e||window.event;
    }
  };

  //定义属性的默认值
  static defaultProps = {
    imgArr: [{
      src: 'http://www.gbtags.com/gb/laitu/600x400&text=图片未加载/0994DA/ffffff',
    }],
    width: 200,
  };

  // 替代原propTypes，指定props参数规范， 属性,注意前面有static,属于静态方法.
  static propTypes = {
    imgArr: React.PropTypes.any.isRequired
  };

  handleShowPreview = (src) => {
    let _this = this;

    _this.setState({
      showPreviewImage: true,
      scaleImageSrc: src
    });

    setTimeout(function () {
      let preContObj = $('#previewContent')
      let preImgObj = $('#previewImage');
      let preWinObj = $('#previewWindow');
      let preImgHeight = preImgObj.height();
      let preImgWidth = preImgObj.width();
      let iWidth = document.documentElement.clientWidth;
      let iHeight = document.documentElement.clientHeight;

      /*设置内容层的位置,居中*/
      preContObj.css ({
        top: (iHeight-preImgHeight)/2,
        left: (iWidth-preImgWidth)/2
      });

      /*设置视图窗口层样式*/
      preWinObj.css({
        height: preImgHeight,
        width: preImgWidth,
        backgroundImage: 'url('+src+')'
      });
    })
  };

  handleClosePreview = () => {
    let _this = this;
    _this.setState({
      showPreviewImage: false,
    });
  };

  render() {
    const {imgSourceData,width} = this.props;
    const _this = this;

    const thumbnailList = imgSourceData.map(function (item, index, arr) {
      if ((typeof item) === 'string') {
        return <img key={index} src={item} alt="缩略图"
                    style={{width: width}}
                    onClick={() => _this.handleShowPreview(item)}/>
      } else {
        return <img key={index} src={item.src} alt="缩略图"
                    style={{width: width}}
                    onClick={() => _this.handleShowPreview(item.src)}/>
      }
    });
    return (
      <div className="preview-image">
        <div id="prevDemo" className="thumbnail-wrap">
          {thumbnailList}
        </div>
        <div className="preview-wrap" style={{display: this.state.showPreviewImage ? 'table': 'none'}}>
          <div className="preview-mask" onClick={()=>{this.handleClosePreview()}}></div>
          <div className="preview-content" id="previewContent" ref="previewContent">
            <div className="preview-content-icon-close" onClick={()=>{this.handleClosePreview()}}>
              <FAIcon type="fa-times fa-times-circle"/>
            </div>
            <img style={{display: 'none'}} src={this.state.scaleImageSrc} id="previewImage" ref="previewImage" />
            <div className="preview-window" id="previewWindow" ref="previewWindow" ></div>
          </div>
        </div>
      </div>
    )
  }
}
export default PreviewImage;
