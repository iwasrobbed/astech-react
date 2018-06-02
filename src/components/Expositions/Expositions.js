import React, {Component} from 'react';
import {
  AppProvider,
  Layout,
  Page,
  Card,
  DisplayText,
  Button
} from '@shopify/polaris';
import NavigationBar from './../NavigationBar';
import ExpositionList from './ExpositionList';
import './Expositions.css';

class Expositions extends Component {
  render() {
    return (
        <AppProvider>
            <Page fullWidth>
                <NavigationBar/>
                <div className="LayoutBelowNavigationBar">
                    <Layout>
                        <Layout.Section>
                            <Card sectioned>
                                <div className="ExpositionsHeaderCard">
                                    <DisplayText size="large">Expositions</DisplayText>
                                    <Button primary>Create new exposition</Button>
                                </div>
                            </Card>
                        </Layout.Section>

                        <Layout.Section>
                            <Card>
                                <div className="ExpositionList">
                                    <ExpositionList/>
                                </div>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </div>
            </Page>
        </AppProvider>
    );
  }
}

export default Expositions;
