import './font-awesome.css';
import './style.css';
import React from 'react';

class FAIcon extends React.Component{
    render() {
        let className = ['fa', this.props.type].join(' ');
        return <i {...this.props} className={className}></i>;
    }
}

export default FAIcon;
