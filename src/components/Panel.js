import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './ItemTypes';
import { DropTarget } from 'react-dnd';

const panelTarget = {
  drop(props, monitor, component) {
    if (monitor.didDrop() ) {
        return;
    }

    const item = monitor.getItem();
  }
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


class Panel extends Component {
    render() {
        const { float, connectDropTarget, isOver } = this.props;
        return connectDropTarget(
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
    float: PropTypes.string.isRequired,
    isOver: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.BOX, panelTarget, collect)(Panel);