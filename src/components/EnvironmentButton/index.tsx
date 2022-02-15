import React from "react";
import { View, Text, TouchableOpacityProps } from "react-native";

import { ButtonContainer, ButtonText } from "./styles";

interface EnvironmentButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <ButtonContainer {...rest} activeOpacity={0.7} isActive={active}>
      <ButtonText isActive={active}>{title}</ButtonText>
    </ButtonContainer>
  );
}

export { EnvironmentButton };
