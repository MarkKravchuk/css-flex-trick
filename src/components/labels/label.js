import React from 'react'
import './labels.css'


export default class Label extends React.Component {

    render() {
        let color = this.getColor();

        if (!color) color = 'yellow';

        return <div style={{backgroundColor: color}} className={'label'}/>
    }

    getColor() {
        let colors = ['green', 'blue', 'purple', 'pink', 'orange', 'black', 'yellow', 'red'];

        return colors[(Math.random() * colors.length).toFixed(0)];
    }
}