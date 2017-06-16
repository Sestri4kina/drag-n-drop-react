import React, { Component } from 'react';
import Panel from './Panel';
import Boxes from './Boxes'

export default class Layout extends Component {
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