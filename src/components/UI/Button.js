import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = ({ label, icon, onClick, styleLabel, styleButton }) => {
  //Initialisation
  //state
  //handlers
  //View
  return (
    <Pressable onPress={onClick} style={[styles.button, styleButton]}>
      {icon ? icon : null}
      <Text style={[styles.label, styleLabel]}> {label} </Text>
    </Pressable>
  );
};

export const ButtonTray = ({ children }) => {
  //Initialisation
  //state
  //handlers
  //View
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "black",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    flex: 1,
    flexDirection: "row",
    gap: 3,
  },
  label: {
    fontSize: 16,
  },
});
