// @flow
import * as React from "react";
import { StyledLogo } from "./styles";

type Props = {};

const Logo = (props: Props): React.Node => (
  <StyledLogo
    {...props}
    source={require('NavigationTest/App/Assets/logo.png')}
  />
);

export default Logo;
