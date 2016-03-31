/**
 * Created by peach on 16-3-30.
 */
import React from 'react';
import {Form, Input, Button, message} from 'antd';
import update from '../../../node_modules/react/lib/update';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Card from './Card.jsx';

class SortCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          text: '我是文字1'
        }, {
          id: 2,
          text: '我是文字2'
        }, {
          id: 3,
          text: '我是文字3'
        }, {
          id: 4,
          text: '我是文字4'
        }, {
          id: 5,
          text: '我是文字5'
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
                   text={cardData.text}
                   moveCard={this.moveCard.bind(this)}/>
    });

    return (
      <div>
        {cardItem}
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(SortCard);
