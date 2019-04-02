// @flow
import * as React from "react";
import { Container, Touchable, Label } from "./styles";

type Props = {};

const Button = (props: Props): React.Node => (
  <Container>
    <Touchable {...props}>
      <Label>{props.label}</Label>
    </Touchable>
  </Container>
);

export default Button;
