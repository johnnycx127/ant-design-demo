/**
 * Created by peach on 16-3-30.
 */
import React from 'react';
import {Form, Input, Button, message} from 'antd';

import Card from './Card.jsx';

class SortCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      card: [
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

  moveCard() {
    console.log(1);
  }

  render() {

    const state = this.state;

    let cardItem = state.card.map((cardData, index) => {
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
export default SortCard;
