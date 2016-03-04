/**
 * Created by peach on 16-3-2.
 */
import React from 'react';
import {Row, Col} from 'antd';

const Layouts_demo = React.createClass({

    render () {
        return (
            <div>
              <Row>
                <Col style={{border: '1px solid green'}} span="24">col-24</Col>
              </Row>
              <Row>
                <Col style={{border: '1px solid green'}} span="12">col-12</Col>
                <Col style={{border: '1px solid green'}} span="12">col-12</Col>
              </Row>
              <Row>
                <Col style={{border: '1px solid green'}} span="8">col-8</Col>
                <Col style={{border: '1px solid green'}} span="8">col-8</Col>
                <Col style={{border: '1px solid green'}} span="8">col-8</Col>
              </Row>
              <Row>
                <Col style={{border: '1px solid green'}} span="6">col-6</Col>
                <Col style={{border: '1px solid green'}} span="6">col-6</Col>
                <Col style={{border: '1px solid green'}} span="6">col-6</Col>
                <Col style={{border: '1px solid green'}} span="6">col-6</Col>
              </Row>
              <Row>
                <Col style={{border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{border: '1px solid green'}} span="4">col-4</Col>
              </Row>
              <Row>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
                <Col style={{border: '1px solid green'}} span="3">col-3</Col>
              </Row>
              <Row>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
                <Col style={{border: '1px solid green'}} span="2">col-2</Col>
              </Row>
              <Row>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
                <Col style={{border: '1px solid green'}} span="1">col-1</Col>
              </Row>
              <br/>
              <Row type="flex" justify="start">
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
              </Row>
              <br/>
              <Row type="flex" justify="center">
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
              </Row>
              <br/>
              <Row type="flex" justify="end">
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
              </Row>
              <br/>
              <Row type="flex" justify="space-between">
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
              </Row>
              <br/>
              <Row type="flex" justify="space-around">
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
                <Col style={{lineHeight: '50px',border: '1px solid green'}} span="4">col-4</Col>
              </Row>

            </div>
        );
    }
});
export default Layouts_demo;

