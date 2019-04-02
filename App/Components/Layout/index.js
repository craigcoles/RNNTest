// @flow
import * as React from "react";
import { View, Center } from "./styles";

type Props = {
  children: React.Node,
  style?: any,
};

const Layout = ({ children, ...rest }: Props): React.Node => (
  <View {...rest}>{children}</View>
);

Layout.Center = ({ children, ...rest }: Center): React.Node => (
  <Center {...rest}>{children}</Center>
);
Layout.Center.displayName = "Layout.Center";

export default Layout;
