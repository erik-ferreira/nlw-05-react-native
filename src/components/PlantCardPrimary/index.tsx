import React from "react";
import { TouchableOpacityProps, Image } from "react-native";
import { SvgUri } from "react-native-svg";

import { Container, LabelCard } from "./styles";

interface PlantCardProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}

function PlantCardPrimary({ data, ...rest }: PlantCardProps) {
  return (
    <Container {...rest}>
      <SvgUri uri={data.photo} width={70} height={70} />
      <LabelCard>{data.name}</LabelCard>
    </Container>
  );
}

export { PlantCardPrimary };
