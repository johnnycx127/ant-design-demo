/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'antd';

const Carousel_demo = React.createClass({
    handleChange(a,b,c) {
      console.log(a,b,c);
    },
    render () {
        return (
            <Carousel style={{backgroundColor: 'green'}} onChange={this.handleChange}>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
        );
    }
});
export default Carousel_demo;

