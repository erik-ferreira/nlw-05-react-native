import styled from "styled-components/native";
import { StyleSheetProperties } from "react-native";
import { colors, fonts } from "../../theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const HeaderContent = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  line-height: 20px;
  color: ${colors.heading};
`;

export const Plants = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
`;
