import React, {Component} from 'react';
import {
  AppProvider,
  Layout,
  Page,
  Card,
  Heading,
  Button,
  FormLayout,
  TextField
} from '@shopify/polaris';
import AccountTypeSelector from './AccountTypeSelector.js';
import './CreateAccount.css';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      accountType: ''
    };
  }

  render() {
    return (
        <AppProvider>
            <Page>
                <Layout>
                    <Layout.Section>
                        <img src={require("./../../assets/astechBlackOrangeLogo@2x.png")} alt="astech" className="AstechLogo"></img>
                        <Card sectioned>
                            <div className="CreateAccountContainer">
                                <Heading>Create an account</Heading>
                                <FormLayout>
                                  <TextField
                                    value={this.state.email}
                                    label="Email"
                                    placeholder="example@email.com"
                                    onChange={this.valueUpdater('email')}
                                  />
                                  <TextField
                                    value={this.state.password}
                                    label="Password"
                                    type="password"
                                    placeholder="********"
                                    onChange={this.valueUpdater('password')}
                                  />
                                  <TextField
                                    value={this.state.passwordConfirmation}
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="********"
                                    onChange={this.valueUpdater('passwordConfirmation')}
                                  />
                                  <AccountTypeSelector/>
                                  <Button primary>Create</Button>
                              </FormLayout>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>
        </AppProvider>
    );
  }

  valueUpdater(field) {
      return (value) => this.setState({[field]: value});
  }
}

export default CreateAccount;
