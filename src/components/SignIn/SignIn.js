import React, {Component} from 'react';
import {
  Layout,
  Page,
  Card,
  Link,
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
        <Page>
            <Layout>
                <Layout.Section>
                    <img src={require("./../../assets/astechBlackOrangeLogo@2x.png")} alt="astech" className="AstechLogo"></img>
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
                              <Link id="forgotPassword" onClick={this.renderForgotPassword()}>Forgot password?</Link>
                              <Button id="SignIn" primary>Sign in</Button>
                          </FormLayout>
                        </div>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card sectioned>
                        <div className="SignInContainer CreateAccount">
                            <Heading>Don't have an account?</Heading>
                            <Button secondary>Create an account</Button>
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
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
