/**
 * Created by peach on 16-3-3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Input} from 'antd';

const InputGroup = Input.Group;

const Input_demo = React.createClass({

    render () {
        return (
            <Row>
              <InputGroup>
                <Col span="6">
                  <Input id="largeInput" size="large" placeholder="大尺寸"/>
                </Col>
                <Col span="6">
                  <Input id="largeInput"  placeholder="默认大小"/>
                </Col>
                <Col span="6">
                  <Input id="largeInput" size="small" placeholder="小尺寸"/>
                </Col>
              </InputGroup>
            </Row>
        );
    }
});
export default Input_demo;

