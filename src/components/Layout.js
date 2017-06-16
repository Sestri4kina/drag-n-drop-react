import React, { Component } from 'react';
import Panel from './Panel';
import Boxes from './Boxes'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class Layout extends Component {
    render() {
        return (
            <div>
                <Panel float='left' />
                <Panel float='right' >
                    <Boxes />
                </Panel>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend) (Layout);