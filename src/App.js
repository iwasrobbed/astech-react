import React, {Component} from 'react';
import {AppProvider} from '@shopify/polaris';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
      return (
          <AppProvider>
              <SignIn></SignIn>
          </AppProvider>
      );
  }
}

export default App;
