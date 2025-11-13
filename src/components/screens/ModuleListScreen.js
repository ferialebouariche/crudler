import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialeModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleLits.js";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

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

  const handleAdd = (module) => setModules([...modules, module]);

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const goToViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });
  const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  //view--------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default ModuleListScreen;
