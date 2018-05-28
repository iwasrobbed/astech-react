import React, {Component} from 'react';

import {
  Select
} from '@shopify/polaris';

class AccountTypeSelector extends Component {
    state = {
      selected: 'exhibitor',
    };

    handleChange = (newValue) => {
      this.setState({selected: newValue});
    }

    render() {
      const options = [
        {label: 'Exhibitor', value: 'exhibitor'},
        {label: 'Organizer', value: 'organizer'},
        {label: 'Administrator', value: 'administrator'},
      ]

      return (
        <Select
          label="Account Type"
          options={options}
          onChange={this.handleChange}
          value={this.state.selected}
        />
      );
  }
}

export default AccountTypeSelector;
