import './style.css';
import React from 'react';

import DustbinContainer from '../dnd-dustbin/Container.jsx';
import SortCard from '../dnd-sort-card/SortCard.jsx';
import ValidatorDemo from '../validation/Validation.jsx'
import AddList from '../AddList/AddList.jsx';

const Container = React.createClass({
  render() {
    return (
      <div className="admin-container">
        {this.props.children}
        <SortCard/>
      </div>
    );
  }
});

export default Container;
