// @flow
import * as React from "react";
import { Text } from "react-native";

import { HomeScreen } from "NavigationTest/App/Router";
import Layout from "NavigationTest/App/Components/Layout";
import Button from "NavigationTest/App/Components/Button";

const Center = (): React.Node => (
  <Layout.Center>
    <Text>Center</Text>
    <Button label="Home" onPress={HomeScreen}/>
  </Layout.Center>
);

export default Center;
