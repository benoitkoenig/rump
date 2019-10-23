import React from 'react';
import { StyleSheet, Text, View, Picker, TextInput } from 'react-native';
import { CheckBox, Divider } from 'react-native-elements'

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

  divider: {
    backgroundColor: '#fafafa',
    marginHorizontal: 20,
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
    timerChecked: false,
    jumpsCountChecked: false,
    jumpsCount: '1000',
  }

  toggleMinimumSpeed = () => this.setState({ minimumSpeedChecked: !this.state.minimumSpeedChecked });
  toggleTimer = () => this.setState({ timerChecked: !this.state.timerChecked, jumpsCountChecked: false });
  toggleJumpsCount = () => this.setState({ jumpsCountChecked: !this.state.jumpsCountChecked, timerChecked: false });

  updateMinimumSpeed = (newValue) => this.setState({ minimumSpeedChecked: true, minimumSpeed: newValue });
  updateJumpsCount = (newValue) => this.setState({ jumpsCountChecked: true, timerChecked: false, jumpsCount: newValue });

  render() {
    const { minimumSpeedChecked, minimumSpeed, timerChecked, jumpsCountChecked, jumpsCount } = this.state;

    return (
      <View>
        <View style={styles.start}>
          <Text style={styles.startText}>Start</Text>
        </View>
        <View>
          <View style={styles.option}>
            <CheckBox checkedColor='#00d0c0' checked={minimumSpeedChecked} onPress={this.toggleMinimumSpeed} />
            <Text style={styles.optionText}>Set minimum speed</Text>
            <Picker style={minimumSpeedChecked ? styles.picker: styles.pickerUnselected} selectedValue={minimumSpeed} onValueChange={this.updateMinimumSpeed}>
              {
                Array(20).fill(0).map((_, i) => (<Picker.Item key={i} label={(2 + i / 10) + ''} value={(2 + i / 10)} />))
              }
            </Picker>
            <Text style={styles.optionText}>jumps / sec</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.option}>
            <CheckBox checkedColor='#00d0c0' checked={timerChecked} onPress={this.toggleTimer} />
            <Text style={styles.optionText}>Set a timer</Text>
          </View>
          <View style={styles.option}>
            <CheckBox checkedColor='#00d0c0' checked={jumpsCountChecked} onPress={this.toggleJumpsCount} />
            <Text style={styles.optionText}>Set a jump count</Text>
            <TextInput style={jumpsCountChecked ? styles.picker: styles.pickerUnselected} keyboardType='number-pad' onChangeText={this.updateJumpsCount} value={jumpsCount} />
          </View>
        </View>
      </View>
    );
  }
}

export default Menu;
