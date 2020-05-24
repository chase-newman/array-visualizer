import React, {Component} from 'react';
import './ArrayBuilder.css';


class ArrayBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
  
    render() {
        let arrayHeight = this.props.arrayHeight * 20;
        return <div 
            className="array" 
            style={{
                height: `${arrayHeight}px`, 
                backgroundColor: this.props.arrayColor}}>
            <span>{arrayHeight}</span>
            </div>         
    }
   
}

export default ArrayBuilder;


