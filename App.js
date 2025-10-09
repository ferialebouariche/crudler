import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () =>   (
    <View style={styles.container}>
      <Text>My name is feriale Bouariche </Text>
      <StatusBar style="auto" />
    </View>
  );
  export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});