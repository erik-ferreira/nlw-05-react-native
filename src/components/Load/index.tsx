import React from "react";

import loadAnimation from "../../assets/load.json";

import { Container, LottieViewAnimation } from "./styles";

function Load() {
  return (
    <Container>
      <LottieViewAnimation source={loadAnimation} autoPlay loop />
    </Container>
  );
}

export { Load };
