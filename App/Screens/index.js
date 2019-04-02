//@flow
import { Navigation } from 'react-native-navigation';

import Loading from "NavigationTest/App/Screens/Loading";
import Home from "NavigationTest/App/Screens/Home";
import Modal from "NavigationTest/App/Screens/Modal";
import Tab from "NavigationTest/App/Screens/Tab";
import Left from "NavigationTest/App/Screens/Left";
import Center from "NavigationTest/App/Screens/Center";
import Right from "NavigationTest/App/Screens/Right";

export const LOADING_SCREEN = "NavigationTest.Loading";
export const HOME_SCREEN = "NavigationTest.Home";
export const MODAL_SCREEN = "NavigationTest.Modal";
export const TAB_SCREEN = "NavigationTest.Tab";
export const LEFT_SCREEN = "NavigationTest.Left";
export const CENTER_SCREEN = "NavigationTest.Center";
export const RIGHT_SCREEN = "NavigationTest.Right";

export const registerScreens = () => {
  Navigation.registerComponent(LOADING_SCREEN, () => Loading);
  Navigation.registerComponent(HOME_SCREEN, () => Home);
  Navigation.registerComponent(MODAL_SCREEN, () => Modal);
  Navigation.registerComponent(TAB_SCREEN, () => Tab);
  Navigation.registerComponent(LEFT_SCREEN, () => Left);
  Navigation.registerComponent(CENTER_SCREEN, () => Center);
  Navigation.registerComponent(RIGHT_SCREEN, () => Right);
};

export default {
  LOADING_SCREEN,
  HOME_SCREEN,
  MODAL_SCREEN,
  TAB_SCREEN,
  LEFT_SCREEN,
  CENTER_SCREEN,
  RIGHT_SCREEN,
};
