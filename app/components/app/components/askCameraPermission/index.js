import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    marginHorizontal: 60,
    textAlign: 'center',
  },

  query: {
    fontSize: 16,
    color: '#fafafa',
    textAlign: 'center',
  },

  link: {
    fontSize: 16,
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
