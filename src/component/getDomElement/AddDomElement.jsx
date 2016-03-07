/**
 * Created by zjp on 16-3-8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Input, Button, message} from 'antd';

const AddDomElement = React.createClass({
  handleClick() {
    var cNode = this.refs.myTextInput.cloneNode();
    cNode.setAttribute("placeholder","请填写规格值");
    this.refs.myDiv.appendChild(cNode);
  },
  render (){
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick}/>
        <div ref="myDiv"></div>
      </div>
    );
  }
});
export default AddDomElement;
