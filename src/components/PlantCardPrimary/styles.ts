import styled from "styled-components/native";
import { colors, fonts } from "../../theme";

export const Container = styled.TouchableOpacity`
  flex: 1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;

export const LabelCard = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin: 16px 0;
`;
