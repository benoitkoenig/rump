import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const AskCameraPermission = ({ ask }) => (
  <View style={styles.container}>
    <Text style={styles.query}>This app needs permission to use the camera to work</Text>
    <Text style={styles.link} onPress={ask}>Give permission</Text>
  </View>
);

export default AskCameraPermission;
