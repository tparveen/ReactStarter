import React from 'react';
import './card.css';

export default class Card extends React.Component {
    render(){
        return (
            <div className="card">
                {this.props.text}
            </div>
        );

    }
}
