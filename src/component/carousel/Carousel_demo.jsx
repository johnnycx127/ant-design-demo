/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'antd';
import img1 from '../../common/img/captain.jpg';
import img2 from '../../common/img/captain2.jpg';
import img3 from '../../common/img/juren.jpg';


const Carousel_demo = React.createClass({
    handleChange(a,b,c) {
      console.log(a,b,c);
    },
    render () {
        return (
            <Carousel style={{backgroundColor: 'green'}} onChange={this.handleChange}>
              <div><h3 style={{background: "#011F1A no-repeat url("+img1+") center center",backgroundSize: 'contain',height: '400px',display: 'block'}} ></h3></div>
              <div><h3 style={{background: "#2F3350 no-repeat url("+img2+") center center",backgroundSize: 'contain',height: '400px',display: 'block'}} ></h3></div>
              <div><h3 style={{background: "black no-repeat url("+img3+") center center",backgroundSize: 'contain',height: '400px',display: 'block'}} ></h3></div>
            </Carousel>
        );
    }
});
export default Carousel_demo;

