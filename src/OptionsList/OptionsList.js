import React, { Component } from 'react';
import './OptionsList.css';
import Feature from '../Feature/Feature'
import FeatureOption from '../FeatureOption/FeatureOption';

class OptionsList extends Component {      
    render() {
        const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => (
              <FeatureOption key={index} feature={key} selected={this.props.selected} item={item} index={index} handleUpdate={this.props.handleUpdate}/>
            ));
            return (
              <Feature key={key} feature={key} options={options}/>
            )
          });  

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        )
    }
}

export default OptionsList;