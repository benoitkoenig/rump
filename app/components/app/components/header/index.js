import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#00d0c0',
  },

  title: {
    color: '#fafafa',
    marginTop: 24,
    marginBottom: 24,
    fontSize: 24,
    textAlign: 'center',
  },
});

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>rump</Text>
  </View>
);

export default Header;
