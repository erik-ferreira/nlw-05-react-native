import React from "react";
import { TouchableOpacityProps, Animated, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import {
  Container,
  Card,
  TitleCard,
  Details,
  TimeLabel,
  Time,
  ButtonRemove,
} from "./styles";
import { colors } from "../../theme";

interface PlantCardProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

function PlantCardSecondary({ data, handleRemove, ...rest }: PlantCardProps) {
  return (
    <Container>
      <Card {...rest}>
        <SvgUri uri={data.photo} width={50} height={50} />
        <TitleCard>{data.name}</TitleCard>

        <Details>
          <TimeLabel>Regar ás</TimeLabel>

          <Time>{data.hour}</Time>
        </Details>
      </Card>
      <ButtonRemove onPress={handleRemove}>
        <Feather name="trash" size={32} color={colors.white} />
      </ButtonRemove>
    </Container>
  );
}

export { PlantCardSecondary };
