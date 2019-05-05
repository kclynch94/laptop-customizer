import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
    render() {
        const feature = this.props.feature;
        const options = this.props.options;

        return(
            <div className="feature" key={feature}>
                <div className="feature__name">{feature}</div>
                <ul className="feature__list">
                    { options }
                </ul>
            </div>

        )
    }
}

export default Feature;