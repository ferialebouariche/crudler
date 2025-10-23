import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ navigate, route }) => {
  //initialisation------
  const { module } = route.params;

  //State-------
  //handlers------
  //view------
  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
