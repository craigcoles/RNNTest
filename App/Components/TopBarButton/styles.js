// @flow
import styled from "styled-components";
import Icon from "NavigationTest/App/Components/Icon";

export const Container = styled.View``;

export const Touchable = styled.TouchableOpacity``;

export const StyledIcon = styled(Icon).attrs(props => ({
  size: props.size ? props.size : 24,
  color: props.color ? props.color : "#fff",
}))``;
