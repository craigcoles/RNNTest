// @flow
import * as React from "react";
import { View, ActivityIndicator } from "react-native"
import { Navigation } from 'react-native-navigation';

import { HomeScreen } from "NavigationTest/App/Router";
import Layout from "NavigationTest/App/Components/Layout";
import Logo from "NavigationTest/App/Components/Logo";

export class Loading extends React.Component {
  componentDidMount() {
    const { componentId } = this.props;

    setTimeout(() => HomeScreen(componentId), 5000);
  }

  render(): React.Node {
    return (
      <Layout.Center>
        <Logo />
        <ActivityIndicator />
      </Layout.Center>
    );
  }
}

export default Loading;
