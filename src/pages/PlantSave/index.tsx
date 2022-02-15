import React, { useState, useEffect } from "react";
import { Alert, Platform, ScrollView } from "react-native";
import { format, isBefore } from "date-fns";
import { SvgFromUri } from "react-native-svg";
import { useRoute } from "@react-navigation/core";

import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

import { Button } from "../../components/Button";

import { navigationRoute } from "../../utils/navigation";
import { PlantProps, savePlant } from "../../libs/storage";

import waterDrop from "../../assets/waterdrop.png";

import {
  Container,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DateTimePickerButton,
  DateTimePickerText,
} from "./styles";

import { colors } from "../../theme";

interface Params {
  plant: PlantProps;
}

function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params;
  const navigation = navigationRoute();

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora do futuro! ⏰");
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerFromAndroid() {
    setShowDatePicker(!showDatePicker);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.",
        buttonTitle: "Muito Obrigado",
        icon: "hug",
        nextScreen: "MyPlants",
      });
    } catch {
      Alert.alert("Não foi possível salvar. 😢");
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.shape,
      }}
    >
      <Container>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} width={150} height={150} />

          <PlantName>{plant.name}</PlantName>

          <PlantAbout>{plant.about}</PlantAbout>
        </PlantInfo>

        <Controller>
          <TipContainer>
            <TipImage source={waterDrop} />

            <TipText>{plant.water_tips}</TipText>
          </TipContainer>

          <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === "android" && (
            <DateTimePickerButton onPress={handleOpenDateTimePickerFromAndroid}>
              <DateTimePickerText>{`Mudar ${format(
                selectedDateTime,
                "HH:mm"
              )}`}</DateTimePickerText>
            </DateTimePickerButton>
          )}

          <Button title="Cadastrar planta" onPress={handleSave} />
        </Controller>
      </Container>
    </ScrollView>
  );
}

export { PlantSave };
