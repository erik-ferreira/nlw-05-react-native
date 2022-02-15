import styled from "styled-components/native";
import { colors, fonts } from "../../theme";

type ButtonContainerProps = {
  isActive: boolean;
};

type ButtonTextProps = {
  isActive: boolean;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${(props) =>
    props.isActive ? colors.green_light : colors.shape};
  width: 76px;
  height: 40px;
  border-radius: 12px;
  margin: 0 5px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 15px;
  font-family: ${(props) => (props.isActive ? fonts.heading : fonts.text)};
  color: ${(props) => (props.isActive ? colors.green_dark : colors.heading)};
`;
