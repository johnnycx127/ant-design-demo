/**
 * Created by peach on 16-3-30.
 */
import React from 'react';
import { findDOMNode } from 'react-dom';
import { Row, Col,Button,Icon} from 'antd';
import { DragSource, DropTarget } from 'react-dnd';

import ItemTypes from './ItemTypes.jsx';


//DragSource 参数
const dragType = ItemTypes.card;
const dragSpec = {
  beginDrag(props, monitor, component) {
    return {
      name: props.name,
      index: props.index,
      id: props.id
    };
  }
};
function dragCollect(connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource()
  }
}

//DropTarget 参数
const dropType = ItemTypes.card;
const dropSpec = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};
function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}


class Card extends React.Component {
  render() {
    const {id,name,normName,price,pic,editDish,deleteDish,isDragging,connectDragSource,connectDropTarget} = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(connectDropTarget(
      <div className="card" style={{opacity}}>
        <Row type="flex" className="card-content">
          <Col span="9" className="card-left">
            <img src={pic} alt="菜品图片"/>
          </Col>
          <Col span="15" className="card-right">
            <h2 className="dish-name">{name} <small>({normName})</small></h2>
            <h2 className="dish-price">￥ {price}</h2>
          </Col>
          <div className="operation-group">
            <Button type="ghost" onClick={editDish.bind(this,id)}><Icon type="edit"/></Button>
            <Button type="ghost" onClick={deleteDish.bind(this,id)} className="right-button"><Icon type="delete"/></Button>
          </div>
        </Row>
      </div>
    ));
  }
}
export default DragSource(dragType, dragSpec, dragCollect)(DropTarget(dropType, dropSpec, dropCollect)(Card))
