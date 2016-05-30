import './style.less'
import React from 'react';
import FAIcon from '../faicon/FAIcon.jsx';
import assign from 'object-assign'

class PreviewImage extends React.Component {
    state = {
        isMousePressed: false,
        showPreviewImage: false,
        previewWidth: 500,
        top: 300,
        left: 0,
        mouseX: 0,
        mouseY: 0,
        rotationDeg: 0,
        iconStyleIndex: 0
    };

    static defaultProps = {
        imgSize: '@50h_70w_1e_1c',
    };

    static propTypes = {
        noImgSize: React.PropTypes.bool,
        src: React.PropTypes.isRequired,
    };

    handlePreviewMouseDown = (e) => {
        let clientX = e.clientX;
        let clientY = e.clientY;
        this.setState({
            isMousePressed: true,
            mouseX: clientX,
            mouseY: clientY
        });
    };

    handlePreviewMouseMove = (e) => {
        const isMousePressed = this.state.isMousePressed;
        if (!isMousePressed) {
            return false;
        }
        const event = this.getEvent(e);
        const oldMouseX = this.state.mouseX;
        const oldMouseY = this.state.mouseY;
        const newMouseX = event.clientX;
        const newMouseY = event.clientY;
        const moveX = newMouseX - oldMouseX;
        const moveY = newMouseY - oldMouseY;
        const oldTop = this.state.top;
        const oldLeft = this.state.left;
        const newLeft = oldLeft + moveX;
        const newTop = oldTop + moveY;
        this.setState({
            top: newTop,
            left: newLeft,
            mouseX: newMouseX,
            mouseY: newMouseY,
        });
    };

    handlePreviewMouseUp = (e) => {
        this.setState({
            isMousePressed: false
        });
    };

    getEvent = (e) => {
        return e || window.event;
    };

    handleShowPreview = () => {
        let clientWidth = document.documentElement.clientWidth;
        let preImgWidth = this.state.previewWidth;
        this.setState({
            showPreviewImage: true,
            left: (clientWidth - preImgWidth) / 2,
        });
    };

    handleClosePreview = () => {
        this.setState({
            showPreviewImage: false,
        });
    };

    handleRotateLeftPreview = () => {
        let iconStyleIndex = this.state.iconStyleIndex;
        let newIndex = iconStyleIndex - 1;
        if (newIndex < 0) {
            newIndex = 3;
        }
        console.log(newIndex);
        this.setState({
            rotationDeg: this.state.rotationDeg - 90,
            iconStyleIndex: newIndex,
        });
    };

    handleRotateRightPreview = () => {
        let iconStyleIndex = this.state.iconStyleIndex;
        let newIndex = iconStyleIndex + 1;
        if (newIndex > 3) {
            newIndex = 0;
        }
        this.setState({
            rotationDeg: this.state.rotationDeg + 90,
            iconStyleIndex: newIndex,
        });
    };

    render() {
        let {src, imgSize, noImgSize} = this.props;
        if (noImgSize) {
            imgSize = '';
        }
        let previewImgSrc = src;
        let img = (
            <img
                {...this.props}
                src={src + imgSize}
                onClick={this.handleShowPreview}
            />
        );
        let previewContentStyle = {
            top: this.state.top,
            left: this.state.left,
            transform: "rotate("+this.state.rotationDeg+"deg)"
        };
        return (
            <div className="preview-image">
                <div className="thumbnail-wrap">{img}</div>
                <div className="preview-wrap" style={{display: this.state.showPreviewImage ? 'block': 'none'}}>
                    <div className="preview-mask" onClick={this.handleClosePreview}></div>
                    <div
                        className={`preview-content preview-rotation-${this.state.iconStyleIndex}`}
                        style={previewContentStyle}
                        onMouseMove={this.handlePreviewMouseMove}
                        onMouseUp={this.handlePreviewMouseUp}
                        onMouseDown={this.handlePreviewMouseDown}
                    >
                        <img className="preview-image" src={previewImgSrc}/>
                        <div className="preview-overlay"></div>
                        <div className="preview-operation-bar">
                            <FAIcon type="fa fa-rotate-left" onClick={this.handleRotateLeftPreview} />
                            <FAIcon type="fa fa-rotate-right" onClick={this.handleRotateRightPreview} />
                            <FAIcon type="fa fa-times fa-times-circle" onClick={this.handleClosePreview} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PreviewImage;
