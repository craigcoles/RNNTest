// @flow
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";

import {
  ModalScreen,
  TabsScreen,
  SideMenuScreen
} from "NavigationTest/App/Router";
import Screens from "NavigationTest/App/Screens";
import Layout from "NavigationTest/App/Components/Layout";
import Button from "NavigationTest/App/Components/Button";

const Home = (props): React.Node => (
  <Layout.Center>
    <Button label="Modal" onPress={ModalScreen}/>
    <Button label="Tabs" onPress={() => TabsScreen(props.componentId)}/>
    <Button label="Side Menu" onPress={() => SideMenuScreen(props.componentId)}/>
  </Layout.Center>
);

export default Home;
