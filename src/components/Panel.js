import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Panel extends Component {
    render() {
        const { float } = this.props;
        return (
            <div style={{
                backgroundColor: '#d3d3d3',
                borderRadius: '7px',
                width: '46%',
                height: '80vh',
                float: float,
                margin: '30px 10px 20px'
            }}>
                {this.props.children}
            </div>
        );
    }
}

Panel.propTypes = {
    float: PropTypes.string.isRequired
}