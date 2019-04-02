// @flow
import * as React from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";

import Layout from "NavigationTest/App/Components/Layout";
import Button from "NavigationTest/App/Components/Button";

const Modal = (props): React.Node => (
  <Layout.Center>
    <Button label="Close Modal" onPress={() => Navigation.dismissModal(props.componentId)}/>
  </Layout.Center>
);

export default Modal;
