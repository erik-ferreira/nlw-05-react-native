import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthRoutes } from "./tab.routes";
import { Welcome } from "../pages/Welcome";
import { PlantSave } from "../pages/PlantSave";
import { Confirmation } from "../pages/Confirmation";
import { UserIdentification } from "../pages/UserIdentification";

import { colors } from "../theme";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <Screen name="Welcome" component={Welcome} />

    <Screen name="UserIdentification" component={UserIdentification} />

    <Screen name="Confirmation" component={Confirmation} />

    <Screen name="PlantSelect" component={AuthRoutes} />

    <Screen name="PlantSave" component={PlantSave} />

    <Screen name="MyPlants" component={AuthRoutes} />
  </Navigator>
);

export { Routes };
