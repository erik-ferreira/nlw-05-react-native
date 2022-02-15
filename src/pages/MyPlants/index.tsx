import React, { useEffect, useState } from "react";
import { FlatList, Alert } from "react-native";
import { ptBR } from "date-fns/locale";
import { formatDistance } from "date-fns";

import { Load } from "../../components/Load";
import { Header } from "../../components/Header";
import { PlantCardSecondary } from "../../components/PlantCardSecondary";

import waterDrop from "../../assets/waterdrop.png";
import { loadPlant, removePlant, PlantProps } from "../../libs/storage";

import {
  Container,
  SpotLight,
  SpotLightImage,
  SpotLightText,
  Plants,
  PlantsTitle,
} from "./styles";

function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      { text: "Não 🙏", style: "cancel" },
      {
        text: "Sim 😢",
        onPress: async () => {
          try {
            await removePlant(plant.id.toString());

            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (err) {
            Alert.alert("Não foi possível remover! 😢");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorage() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date(),
        { locale: ptBR }
      );

      setNextWaterd(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      );
      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorage();
  }, []);

  return loading ? (
    <Load />
  ) : (
    <Container>
      <Header />

      <SpotLight>
        <SpotLightImage source={waterDrop} />

        <SpotLightText>{nextWaterd}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
}

export { MyPlants };
