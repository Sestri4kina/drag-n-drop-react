import React, { Component } from 'react';
import Workspace from './Workspace';
import Sidebar from './Sidebar'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class Layout extends Component {
    render() {
        return (
            <div>
                <Workspace />
                <Sidebar />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend) (Layout);