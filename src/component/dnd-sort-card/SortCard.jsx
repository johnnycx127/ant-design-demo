/**
 * Created by peach on 16-3-30.
 */
import React from 'react';
import {Row,Col,Modal} from 'antd';
import update from '../../../node_modules/react/lib/update';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Card from './Card.jsx';
import './style.less';
import birdUrl from './bird.png';

const confirm = Modal.confirm;


class SortCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          name: '京味双拼',
          rank:'100',
          normName: "中份",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 2,
          name: '小鸭哥鸭卷',
          rank:'200',
          normName: "大份",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 3,
          name: '可口可乐',
          rank:'300',
          normName: "200ml",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 4,
          name: '七喜',
          rank:'400',
          normName: "350ml",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 5,
          name: "鸭脖",
          rank:'500',
          normName: "变态辣",
          price: "58.00",
          pic: birdUrl
        }
      ]
    };
  }

  //拖拽功能
  moveCard(dragIndex, hoverIndex) {
    console.log(dragIndex,hoverIndex);
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    const tempRank = cards[dragIndex].rank;
    cards[dragIndex].rank = cards[hoverIndex].rank;
    cards[hoverIndex].rank = tempRank;

    this.setState({
      cards: cards
    });
    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }

  //操作按钮,修改
  handleEdit (id) {
    let cardData = this.state.cards;
    let editData = null;
    for (let i=0;i<cardData.length;i++) {
      if (cardData[i].id == id) {
        editData = cardData[i];
        break;//找到符合要求的，就结束,减少查询循环次数
      }
    }
    console.log(editData);
  }

  //操作按钮，删除
  handleDelete(id) {
    let cardData = this.state.cards;
    let deleteData = null;
    for (let i=0;i<cardData.length;i++) {
      if (cardData[i].id == id) {
        deleteData = cardData[i];
        break;//找到符合要求的，就结束,减少查询循环次数
      }
    }
    let contentInfo = '';
    //if (id.dishClassify == '单品') {
    //  contentInfo = '删除单品可能会影响门店的售卖，并且包含该单品的套餐也会被删除';
    //} else if (id.dishClassify == '套餐') {
    //  contentInfo = '删除该套餐，可能会影响门店的售卖哦...';
    //}
    confirm({
      title: '您是否确认要删除这项内容',
      //content: contentInfo,
      onOk() {
        console.log("删除的内容是："+JSON.stringify(deleteData));
      },
      onCancel() {
      }
    });
  }

  render() {
    const state = this.state;
    let cardItem = state.cards.map((cardData, index) => {
      return <Card index={index}
                   key={cardData.id}
                   id={cardData.id}
                   name={cardData.name}
                   normName={cardData.normName}
                   price={cardData.price}
                   pic={cardData.pic}
                   moveCard={this.moveCard.bind(this)}
                   editDish={this.handleEdit.bind(this)}
                   deleteDish={this.handleDelete.bind(this)}/>
    });

    return (
      <div className="card-wrap">
        <div className="card-title">
          <span className="classify">单品</span>
          <span className="total-number">数量：{state.cards.length}</span>
        </div>
        <div className="card-items">
          {cardItem}
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(SortCard);
