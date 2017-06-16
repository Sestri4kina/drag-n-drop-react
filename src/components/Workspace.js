import React, { Component } from 'react';
import Panel from './Panel';
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

class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: ['some']
        }
    }
    render() {
        console.log(this.state.elements)
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div>
                <Panel float='left'/>
            </div>
        );
    }
}

Workspace.propTypes = {
    isOver: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.BOX, panelTarget, collect)(Workspace);