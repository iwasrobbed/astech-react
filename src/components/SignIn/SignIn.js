import React, {Component} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppProvider,
  Layout,
  Page,
  Card,
  Link as TextLink,
  Heading,
  Button,
  FormLayout,
  TextField
} from '@shopify/polaris';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
        <AppProvider>
            <Page>
                <Layout>
                    <Layout.Section>
                        <img src={require("./../../assets/astechBlackOrangeLogo@2x.png")} alt="astech" className="AstechLoggedOutLogo"></img>
                        <Card sectioned>
                            <div className="SignInContainer">
                                <Heading>Sign in</Heading>
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
                                  <TextLink id="forgotPassword" onClick={this.renderForgotPassword()}>Forgot password?</TextLink>
                                  <Button id="SignIn" primary>Sign in</Button>
                              </FormLayout>
                            </div>
                        </Card>
                    </Layout.Section>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="SignInContainer CreateAccount">
                                <Heading>Don't have an account?</Heading>
                                <RouterLink to="/account/create">
                                    <Button secondary>Create an account</Button>
                                </RouterLink>
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

  renderForgotPassword() {
      return;
  }
}

export default SignIn;
