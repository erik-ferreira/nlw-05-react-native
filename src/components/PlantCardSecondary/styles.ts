import styled from "styled-components/native";

import { colors, fonts } from "../../theme";

export const Container = styled.View`
  height: 90px;
  border-radius: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Card = styled.View`
  width: 80%;
  height: 100%;
  background-color: ${colors.shape};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  flex-direction: row;
  align-items: center;
`;

export const TitleCard = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
  margin-right: 10px;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  background-color: ${colors.red};

  align-items: center;
  justify-content: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
