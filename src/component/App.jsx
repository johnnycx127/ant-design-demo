import './App.jsx';
import React from 'react';
import Header from './header/Header.jsx';
import Container from './container/Container.jsx';
import SideBar from './side-bar/SideBar.jsx';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
});

export default App;
