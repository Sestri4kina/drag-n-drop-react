import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './ItemTypes';
import { DragSource } from 'react-dnd';

const boxSource = {
    beginDrag(props) {
        return {
            boxId: props.id
        };
    }
}

function collect(connect, monitor) {
    return {
        connectDragStore: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Box extends Component {
    render() {
        const { connectDragStore, isDragging, text } = this.props;
        return connectDragStore(
            <div style={{
                backgroundColor: '#4d4dff',
                opacity: isDragging ? 0.5 : 1,
                borderRadius: '3px',
                width: '60%',
                height: '40px',
                display: 'inline-block',
                margin: '10px',
                color: 'white',
                textAlign: 'center',
                cursor: 'move'
            }}>
                {text}
            </div>
        );
    }
}

Box.propTypes = {
    text: PropTypes.string.isRequired,
    connectDragStore: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);


/*
export default class Box extends Component {
    render() {
        const { text } = this.props;
        return (
            <div style={{
                backgroundColor: '#4d4dff',
                borderRadius: '3px',
                width: '60%',
                height: '40px',
                display: 'inline-block',
                margin: '10px',
                color: 'white',
                textAlign: 'center'
            }}>
                {text}
            </div>
        );
    }
}
*/


/*

*/