import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ParamsConfirmation } from "../../libs/storage";

import { Button } from "../../components/Button";

import { navigationRoute } from "../../utils/navigation";

import { Container, Content, Emoji, Title, Subtitle, Footer } from "./styles";

const emojis = {
  hug: "🤗",
  smile: "😄",
};

function Confirmation() {
  const routes = useRoute();
  const navigation = navigationRoute();

  const { title, subtitle, buttonTitle, icon, nextScreen } =
    routes.params as ParamsConfirmation;

  function handleMoveOn() {
    if (nextScreen === "PlantSelect") {
      navigation.navigate("PlantSelect");
    } else {
      navigation.navigate("MyPlants");
    }
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>

        <Footer>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
}

export { Confirmation };
