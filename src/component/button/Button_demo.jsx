/**
 * Created by peach on 16-3-2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Input, Button, message, Icon} from 'antd';
const ButtonGroup = Button.Group;

const Button_demo = React.createClass({
    getInitialState () {
      return ({liked: false})
    },
    handleClick() {
      this.setState({liked:!this.state.liked});
    },
    render () {
      var text = this.state.liked ? 'like' : 'don\'t likt';
        return (
            <div>
              <p>you {text} me</p>
              <Button size="large" type="primary" loading onClick={this.handleClick}>click to toggle <Icon type="search" /></Button>
              <input type="button" value="click to toggle" onClick={this.handleClick}/>
              <Button type="ghost" shape="circle-outline" size="large">
                <Icon type="search" />
              </Button>

              <ButtonGroup>
                <Button type="primary" size="large">1</Button>
                <Button type="primary" size="large">2</Button>
                <Button type="primary" size="large">3</Button>
                <Button type="primary" size="large">4</Button>
              </ButtonGroup>


            </div>
        );
    }
});
export default Button_demo;

