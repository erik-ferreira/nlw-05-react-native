import styled from "styled-components/native";

import { colors, fonts } from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0;
  background-color: ${colors.background};
`;

export const SpotLight = styled.View`
  background-color: ${colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 20px 0;
`;
