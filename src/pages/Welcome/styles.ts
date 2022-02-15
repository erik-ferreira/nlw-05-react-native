import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors, fonts } from "../../theme";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const ImageContent = styled.Image`
  height: ${Dimensions.get("window").width * 0.7};
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  font-family: ${fonts.heading};
  line-height: 34px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${fonts.text};
  padding: 0 20px;
  color: ${colors.heading};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-right: 10px;
  width: 56px;
  height: 56px;
`;
