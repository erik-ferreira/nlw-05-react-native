import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PlantSelect } from "../pages/PlantSelect";
import { MyPlants } from "../pages/MyPlants";

import { colors } from "../theme";

const { Navigator, Screen } = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.green,
      tabBarInactiveTintColor: colors.heading,
      tabBarLabelPosition: "beside-icon",
      tabBarStyle: {
        paddingVertical: Platform.OS === "ios" ? 10 : 4,
        height: 80,
      },
      headerShown: false,
    }}
  >
    <Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: ({ size, color }) => {
          return (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          );
        },
      }}
    />

    <Screen
      name="Minhas Planta"
      component={MyPlants}
      options={{
        tabBarIcon: ({ size, color }) => {
          return (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          );
        },
      }}
    />
  </Navigator>
);

export { AuthRoutes };
