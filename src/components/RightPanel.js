import React, { Component } from 'react';
import Box from './Box';

export default class RightPanel extends Component {
    render() {
        
        return (
            <div style={{
                backgroundColor: '#d3d3d3',
                borderRadius: '7px',
                width: '46%',
                height: '80vh',
                float: 'right',
                margin: '30px 10px 20px'
            }}>
                <Box text='1'/>
            </div>
        );
    }
}