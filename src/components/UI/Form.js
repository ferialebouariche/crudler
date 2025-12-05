import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icons from "./Icons.js";
import { Button, ButtonTray } from "./Button.js";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  //Initialisation
  //State
  //Handlers
  //View
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItem}>
        {children}
      </ScrollView>

      <ButtonTray>
        <Button label={submitLabel} icons={submitIcon} onClick={onSubmit} />
        <Button label="Cancel" icons={<Icons.Close />} onClick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};
const InputText = ({ label, value, onChange }) => {
  //Initialisation
  //State
  //Handlers
  //View
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}> {label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.itemTextInput}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  //Initialisation
  //State
  //Handlers
  //View
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}> {label}</Text>
      <Picker mode="dropdown" selectedValue={value} onValueChange={onChange}>
        <Picker.Item value={null} label={prompt} />
        {options.map((option, index) => (
          <Picker.Item key={index} value={option.value} label={option.label} />
        ))}
      </Picker>
    </View>
  );
};
//compose components
Form.InputText = InputText;
Form.InputSelect = InputSelect;

//styles

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  formItem: {
    gap: 5,
  },
  item: {
    marginBottom: 10,
  },
  itemLabel: {
    color: "black",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  itemPickerStyle: {
    height: 50,
    backkgroud: "whitesmoke",
  },
  itemPickerPromptStyle: {
    color: "gray",
  },
});

export default Form;
