import React, { Component } from 'react';
import Panel from './Panel';
import Boxes from './Boxes'

export default class Sidebar extends Component {
    render() {
        return (
            <Panel float='right'>
                <Boxes />
            </Panel>
        );
    }
}