import React from 'react';
import Header from './header/Header.jsx';
import Container from './container/Container.jsx';
import Login from '../component/login/Login.jsx';
import Button from '../component/button/Button_demo.jsx';
import Layouts from '../component/layout/Layouts_demo.jsx';
import Cascader from '../component/cascader/Cascader_demo.jsx';
import Checkbox from '../component/checkbox/Checkbox_demo.jsx';
import Checkbox2 from '../component/checkbox/Checkbox_demo2.jsx';
import Table from '../component/table/Table_demo.jsx';
import Input from '../component/form/Input_demo.jsx';
import InputInline from '../component/form/Input_inline.jsx';
import Radio from '../component/radio/Radio_demo.jsx';
import Switch from '../component/switch/Switch_demo.jsx';
import Carousel from '../component/carousel/Carousel_demo.jsx';
import Modal from '../component/modal/Modal_demo.jsx';
import Pagination from '../component/pagination/Pagination_demo.jsx'

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Carousel />
        </Container>
        <br/>
        <Pagination />
        <br/>
        <Modal />
        <br/>
        <br/>
        <Switch />
        <br/>
        <Radio />
        <br/>
        <InputInline />
        <br/>
        <Input />
        <br/>
        <Login/>
        <br/>
        <Cascader/>
        <br/>
        <Checkbox/>
        <br/>
        <Checkbox2 />
        <br/>
        <Button/>
        <br/>
        <Table />
        <br/>
        <Layouts/>
        <br/>


      </div>
    );
  }
});

export default App;
