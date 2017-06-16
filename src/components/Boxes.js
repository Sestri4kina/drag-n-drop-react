import React, { Component } from 'react';
import Box from './Box';

export default class Boxes extends Component {
    fillOutBoxes(num) {
        let boxes = [];
        for (let i = 0; i < num; i++) {
            boxes.push(<Box text={'box ' + (+i + 1)} />);
        }
        return boxes;
    }

    render() {
        const boxes = this.fillOutBoxes(5);
        
        return (
            <div>
                <ul style={{listStyle: 'none'}}>
                    {boxes.map((box, id)=> 
                        <li key={'box_' + (+id+1)}>{box}</li>
                    )}
                </ul>
            </div>
        );
    }
}