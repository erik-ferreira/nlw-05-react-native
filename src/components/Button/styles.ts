import styled from "styled-components/native";
import { colors, fonts } from "../../theme";

export const Container = styled.TouchableOpacity`
  background-color: ${colors.green};
  height: 56px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.white};
`;
