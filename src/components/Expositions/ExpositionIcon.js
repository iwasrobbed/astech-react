import React, {Component} from 'react';

class ExpositionIcon extends Component {
  render() {
    return (
        <div className="ExpositionIconTableItem">
            <img src={require("./../../assets/SalonDuChocolat@2x.png")} alt="salon du chocolat" className="ExpositionIconSmall"></img>
            <span>Salon du Chocolat</span>
        </div>
    );
  }
}

export default ExpositionIcon;
