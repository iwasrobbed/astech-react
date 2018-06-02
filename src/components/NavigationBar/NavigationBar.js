import React, {Component} from 'react';
import {
  AppProvider,
  Icon
} from '@shopify/polaris';
import './NavigationBar.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  render() {
    return (
        <AppProvider>
            <div className="NavigationBar">
                <div className="AstechNavLogo">
                    <img src={require("./../../assets/astechNavLogo@2x.png")} alt="astech"></img>
                </div>
                <div className="SearchContainer">
                    <div className="NavigationSearch">
                        <input id="navSearchField" placeholder="Search"/>
                        <div className="Backdrop">
                            <Icon source="search" color="white"/>
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
  }

  valueUpdater(field) {
      return (value) => this.setState({[field]: value});
  }
}

export default NavigationBar;
