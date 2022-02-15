import styled from "styled-components/native";
import { colors, fonts } from "../../theme";

type InputProps = {
  inputIsFocused: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 54px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 20px;
`;

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  padding: 10px;
  margin-top: 50px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.inputIsFocused ? colors.green : colors.gray};
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;
