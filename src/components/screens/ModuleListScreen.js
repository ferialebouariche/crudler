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
  const handleModify = (updateModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID == updateModule.ModuleID ? updateModule : module
      )
    );

  const onModify = (module) => {
    handleModify(module);
    //navigation.navigate("ModuleListScreen");
    //navigation.popToTop();
    navigation.replace("ModuleViewScreen", { module, onDelete, onModify });
  };

  const goToViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
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
