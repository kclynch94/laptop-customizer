import React, { Component } from 'react';
import './FeatureOption.css';

class FeatureOption extends Component {
    render() {
        const item = this.props.item;
        const index = this.props.index;
        const selectedClass = item.name === this.props.selected[this.props.feature].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
            <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.props.handleUpdate(this.props.feature, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
        ) 
    }
}

export default FeatureOption;










