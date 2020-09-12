import React from 'react';


export default class DisplayCalculator extends React.Component {
    render() {

        return ( 
            <div className="displayCalculator" id="displayCalculator">
                
                <h3>{this.props.result}</h3>
                
            </div>
        );
    }
}