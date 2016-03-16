import './style.css';
import React from 'react';

import DustbinContainer from '../dnd-dustbin/Container.jsx';


const Container = React.createClass({
  render() {
    return (
      <div className="admin-container">
        {this.props.children}
        <DustbinContainer />
      </div>
    );
  }
});

export default Container;
