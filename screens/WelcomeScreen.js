import { useContext } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import AuthStore from '../store/store';

function WelcomeScreen() {

  const ctx = useContext(AuthStore);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Button title='Logout' onPress={ctx.logout}></Button>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});