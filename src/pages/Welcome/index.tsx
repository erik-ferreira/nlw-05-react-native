import React from "react";
import { Feather } from "@expo/vector-icons";

import { navigationRoute } from "../../utils/navigation";

import {
  Container,
  Content,
  Title,
  ImageContent,
  SubTitle,
  Button,
} from "./styles";

import wateringImg from "../../assets/watering.png";

function Welcome() {
  const navigation = navigationRoute();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <Container>
      <Content>
        <Title>
          Gerencie{"\n"}
          suas plantas de {"\n"}
          forma fácil
        </Title>

        <ImageContent source={wateringImg} resizeMode="contain" />

        <SubTitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </SubTitle>

        <Button onPress={handleStart}>
          <Feather name="chevron-right" color="#FFF" size={32} />
        </Button>
      </Content>
    </Container>
  );
}

export { Welcome };
