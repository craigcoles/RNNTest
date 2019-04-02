// @flow
import * as React from "react";
import { Container, Touchable, StyledIcon } from "./styles";

type Props = {
  name: string,
  color?: string,
  size?: number,
};

const TopBarButton = (props: Props): React.Node => (
  <Container>
    <Touchable>
      <StyledIcon
        name={props.icon}
        color={props.color}
        size={props.size}
      />
    </Touchable>
  </Container>
);

export default TopBarButton;
