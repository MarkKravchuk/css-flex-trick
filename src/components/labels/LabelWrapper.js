import { Component } from 'react'
import Label from "./label";
import './labels.css'

export default class LabelWrapper extends Component {

    state = {
        labelsQuantity: (Math.random() * 15).toFixed(0)
        // labelsQuantity: (Math.random() * 15).toFixed(0)
    }

    render() {

        let {labelsQuantity} = this.state;

        let labels = [];
        for (let i = 0; i < labelsQuantity; i++) {
            labels.push( <Label key={i}/>);
        }

        return <div className={'label-wrapper'}>
            {labels.map((item) => item)}
        </div>
    }

}