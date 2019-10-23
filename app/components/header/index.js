import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#00d0c0',
    textAlign: 'center',
  },

  title: {
    color: '#fafafa',
    marginTop: '1em',
    marginBottom: '1em',
    fontSize: '1.2em',
  },
});

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>rump</Text>
  </View>
);

export default Header;
