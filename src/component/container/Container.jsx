import './style.css';
import React from 'react';

import DustbinContainer from '../dnd-dustbin/Container.jsx';
import SortCard from '../dnd-sort-card/SortCard.jsx';
import ValidatorDemo from '../validation/Validation.jsx'
import AddList from '../AddList/AddList.jsx';
import PreviewImage from '../preview-image/PreviewImage.jsx';

const Container = React.createClass({

  render() {
    const imgSrc = 'http://7xrioc.com1.z0.glb.clouddn.com/img/illustration/photographGirl.jpg';

    return (
      <div className="admin-container">
        {this.props.children}
        <PreviewImage src={imgSrc} width="100px" noImgSize />
      </div>
    );
  }
});



export default Container;
