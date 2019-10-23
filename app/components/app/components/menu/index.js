import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
  start: {
    backgroundColor: '#303030',
    width: '100%',
    marginTop: 120,
    paddingVertical: 24,
  },

  startText: {
    color: '#00d0c0',
    fontSize: 24,
    textAlign: 'center',
  },

  option: {
    flexDirection: 'row',
    marginTop: 10,
  },

  optionText: {
    color: '#fafafa',
    marginTop: 16,
  },

  picker: {
    backgroundColor: '#fafafa',
    height: 20,
    width: 40,
    marginTop: 15,
    marginHorizontal: 8,
  },

  pickerUnselected: {
    backgroundColor: '#c0c0c0',
    color: '#808080',
    height: 20,
    width: 40,
    marginTop: 15,
    marginHorizontal: 8,
  },
});

class Menu extends React.Component {
  state = {
    minimumSpeedChecked: false,
    minimumSpeed: 2,
  }

  toggle = (key) => {
    return () => this.setState({ [key]: !this.state[key] });
  }

  update = (key, keyToValidate) => {
    return (newValue) => this.setState({
      [key]: newValue,
      [keyToValidate]: true,
    });
  }

  render() {
    const { minimumSpeedChecked, minimumSpeed } = this.state;

    return (
      <View>
        <View style={styles.start}>
          <Text style={styles.startText}>Start</Text>
        </View>
        <View>
          <View style={styles.option}>
            <CheckBox checkedColor='#00d0c0' checked={minimumSpeedChecked} onPress={this.toggle('minimumSpeedChecked')} />
            <Text style={styles.optionText}>Set minimum speed</Text>
            <Picker style={minimumSpeedChecked ? styles.picker: styles.pickerUnselected} selectedValue={minimumSpeed} onValueChange={this.update('minimumSpeed', 'minimumSpeedChecked')}>
              {
                Array(20).fill(0).map((_, i) => (<Picker.Item key={i} label={(2 + i / 10) + ''} value={(2 + i / 10)} />))
              }
            </Picker>
            <Text style={styles.optionText}>jumps / sec</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Menu;
