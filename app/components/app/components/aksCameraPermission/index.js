import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    marginHorizontal: 60,
    textAlign: 'center',
    fontSize: 20,
  },

  query: {
    color: '#fafafa',
    textAlign: 'center',
  },

  link: {
    marginTop: 24,
    textDecorationLine: 'underline',
    color: '#00d0c0',
    textAlign: 'center',
  },
});

const AskCameraPermission = ({ ask }) => (
  <View style={styles.container}>
    <Text style={styles.query}>This app needs permission to use the camera to work</Text>
    <Text style={styles.link} onPress={ask}>Give permission</Text>
  </View>
);

export default AskCameraPermission;
