import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text testID="welcome" style={styles.welcome}>Hello!</Text>
//       </View>
//     );
//   }
// }

const App = () => (
      <View style={styles.container}>
        <Text testID="welcome" style={styles.welcome}>Hello!</Text>
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