//@flow
import { Navigation } from "react-native-navigation";
import { LaunchApp } from "NavigationTest/App/Router";

Navigation.events().registerAppLaunchedListener(() => LaunchApp());
