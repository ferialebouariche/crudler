import { StyleSheet, View } from "react-native";
import ModuleItem from "./ModuleItem";
const ModuleList = ({ modules, onSelect }) => {
  //Handlers---------------------

  //view----------------
  return (
    <View style={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            module={module}
            onSelect={onSelect}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({});
export default ModuleList;
