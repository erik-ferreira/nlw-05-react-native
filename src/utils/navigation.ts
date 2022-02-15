import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PlantProps, ParamsConfirmation } from "../libs/storage";

type StackListPages = {
  Welcome: undefined;
  PlantSelect: undefined;
  Confirmation: ParamsConfirmation;
  UserIdentification: undefined;
  PlantSave: {
    plant: PlantProps;
  };
  MyPlants: undefined;
};

type NavigationProps = NativeStackNavigationProp<StackListPages>;

function navigationRoute() {
  const navigation = useNavigation<NavigationProps>();

  return navigation;
}

export { navigationRoute };
