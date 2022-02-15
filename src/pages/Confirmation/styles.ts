import styled from "styled-components/native";
import { colors, fonts } from "../../theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};

  line-height: 38px;
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 17px;
  padding: 0 10px;
  color: ${colors.heading};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
`;
