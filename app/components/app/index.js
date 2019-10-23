import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

export default App;
