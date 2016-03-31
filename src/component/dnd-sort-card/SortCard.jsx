/**
 * Created by peach on 16-3-30.
 */
import React from 'react';
import {Row,Col} from 'antd';
import update from '../../../node_modules/react/lib/update';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Card from './Card.jsx';
import './style.less';

import birdUrl from './bird.png';

class SortCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          name: '京味双拼',
          normName: "中份",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 2,
          name: '小鸭哥鸭卷',
          normName: "大份",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 3,
          name: '可口可乐',
          normName: "200ml",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 4,
          name: '七喜',
          normName: "350ml",
          price: "58.00",
          pic: birdUrl
        }, {
          id: 5,
          name: "鸭脖",
          normName: "变态辣",
          price: "58.00",
          pic: birdUrl
        }
      ]
    };
  }

  //拖拽功能
  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
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
                   moveCard={this.moveCard.bind(this)}/>
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
