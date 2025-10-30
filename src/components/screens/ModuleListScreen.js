import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialeModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleLits.js";
import RenderCount from "../UI/RenderCount.js";
const ModuleListScreen = ({ navigation }) => {
  //initialisation
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  //state ---------------
  const [modules, setModules] = useState(initialeModules);
  //handler------------------
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });

  //view--------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default ModuleListScreen;
