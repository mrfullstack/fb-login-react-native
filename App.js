
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import LoginButton from './components/LoginButton'

function App() {
  return (
    <View style={styles.container}>
      <LoginButton />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f5f5f5'
  }
});

export default App;
