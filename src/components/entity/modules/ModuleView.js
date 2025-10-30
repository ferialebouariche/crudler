import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../../UI/Icons";
import { Button, ButtonTray } from "../../UI/Button";

const ModuleView = ({ module, onDelete }) => {
  //Initialisation
  //state
  //handle
  const handleDelete = () => onDelete(module);

  const requestDelete = () =>
    Alert.alert(
      "Delete Warning",
      `Are you sure you want to delete ${module.ModuleCode} ${module.ModuleName}?`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );
  return (
    <View>
      <FullWidthImage
        source={{ uri: module.ModuleImage }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName}
          <Text style={styles.dimText}>(Module Leader)</Text>
        </Text>
        <ButtonTray>
          <Button
            icon={<Icons.Edit />}
            label="Modify"
            styleButton={{ backgroundColor: "green" }}
            styleLabel={{ color: "black" }}
          />
          <Button
            icon={<Icons.Delete />}
            label="Delete"
            onClick={requestDelete}
            styleButton={{ backgroundColor: "red" }}
            styleLabel={{ color: "black" }}
          />
        </ButtonTray>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRaduis: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dimText: {
    color: "blue",
  },
});
export default ModuleView;
