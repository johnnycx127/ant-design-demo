/**
 * Created by peach on 16-5-26.
 */
import './style.less'
import React from 'react';
import {Form, Input, Button, message} from 'antd';
import FAIcon from '../faicon/FAIcon.jsx';
//定义类 并继承baseComponent
class PreviewImage extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    document.onmousemove = function MouseMove() {
      function showLogin() {
        var loginDiv = document.getElementById("loginDiv");
        var zhezhao = document.getElementById("zhezhao");
        var clientx = document.documentElement.clientWidth;
        var clienty = document.documentElement.clientHeight;
        var l_margin = (clientx - parseInt(loginDiv.style.width)) / 2;
        var t_margin = (clienty - parseInt(loginDiv.style.height)-200) / 2
        loginDiv.style.left = l_margin + "px";
        loginDiv.style.top = t_margin +"px";
        loginDiv.style.display = "block";
        zhezhao.style.display = "block";
      }
      function hidLogin() {
        var loginDiv = document.getElementById("loginDiv");
        var zhezhao = document.getElementById("zhezhao");
        loginDiv.style.display = "none";
        zhezhao.style.display = "none";
      }
      function titleMove() {
        var moveable = true;
        var loginDiv = document.getElementById("loginDiv");
        //以下变量提前设置好                        var clientX = window.event.clientX;
        var clientY = window.event.clientY;
        var moveTop = parseInt(loginDiv.style.top);
        var moveLeft = parseInt(loginDiv.style.left);
        document.onmousemove = function MouseMove() {
          if (moveable) {
            var y = moveTop + window.event.clientY - clientY;
            var x = moveLeft + window.event.clientX - clientX;
            if (x > 0 && y > 0) {
              loginDiv.style.top = y + "px";
              loginDiv.style.left = x + "px";
            }
          }
        }
        document.onmouseup = function Mouseup() {
          moveable = false;
        }
      }


    }
  };

  // 初始化state,替代原getInitialState, 注意前面没有static
  state = {
    showPreviewImage: false,
    scaleImageSrc: '',
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
    //定义缩略图
    //if (typeof imgArr ==  ) {
    //
    //}

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
        {/*缩略图*/}
        <div className="thumbnail-wrap">
          {thumbnailList}
        </div>
        {/*弹出层*/}
        <div className="preview-wrap" style={{display: this.state.showPreviewImage ? 'table': 'none'}}>
          <div className="preview-mask" onClick={()=>{this.handleClosePreview()}}></div>
          <div className="thumbnail-table-cell">
            <div className="table-cell-content" id="table-cell-content">
              <div className="preview-img-icon-close" onClick={()=>{this.handleClosePreview()}}>
                <FAIcon type="fa-times fa-times-circle"/>
              </div>
              <img src={this.state.scaleImageSrc} alt="图片预览"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PreviewImage;
