import './style.css';
import React from 'react';

const Container = React.createClass({
    render() {
        return (
            <div className="admin-container">{this.props.children}</div>
        );
    }
});

export default Container;
