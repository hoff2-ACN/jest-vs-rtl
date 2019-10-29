import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => (
      <View style={styles.container}>
        <Text testID="welcome" style={styles.welcome}>Hello!</Text>
        <Button onPress={() => {}} title="Click for Time" testID="getTime" />
      </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
