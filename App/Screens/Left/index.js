// @flow
import * as React from "react";
import { Text } from "react-native";

import Layout from "NavigationTest/App/Components/Layout";

const Left = (): React.Node => (
  <Layout.Center>
    <Text>Left</Text>
  </Layout.Center>
);

export default Left;
