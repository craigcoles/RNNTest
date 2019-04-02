// @flow
import * as React from "react";
import { Text } from "react-native";

import { HomeScreen } from "NavigationTest/App/Router";
import Layout from "NavigationTest/App/Components/Layout";
import Button from "NavigationTest/App/Components/Button";

const Tab = (props): React.Node => (
  <Layout.Center>
    <Text>Tab {props.number}</Text>
    <Button label="Home" onPress={HomeScreen}/>
  </Layout.Center>
);

export default Tab;
