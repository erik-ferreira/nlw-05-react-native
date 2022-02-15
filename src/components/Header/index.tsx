import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userImg from "../../assets/erik.png";
import { Container, Greeting, UserName, ImageProfile } from "./styles";

function Header() {
  const [useName, setUserName] = useState<string>("");

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");

      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);

  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{useName}</UserName>
      </View>

      <ImageProfile source={userImg} />
    </Container>
  );
}

export { Header };
