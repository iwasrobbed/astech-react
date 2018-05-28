import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

// Routes
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';

class App extends Component {
  render() {
      return (
          <div>
              <BrowserRouter>
                  <div>
                      <Route exact path="/" component={SignIn} />
                      <Route exact path="/account/create" component={CreateAccount} />
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
