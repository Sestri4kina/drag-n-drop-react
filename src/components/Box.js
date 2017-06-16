import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './ItemTypes';
import { DragSource } from 'react-dnd';

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

/*const boxSource = {
    beginDrag(props) {
        return {};
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
        const { connectDragStore, text } = this.props;
        return connectDragStore(
            <div style={{
                backgroundColor: 'black',
                borderRadius: '3px',
                width: '40px',
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

Box.propTypes = {
    text: PropTypes.string.isRequired,
    connectDragStore: PropTypes.func.isRequired
}

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);

*/