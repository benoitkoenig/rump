/* eslint-disable react/no-array-index-key */

import React from 'react';
import {
  Text, View, Picker, TextInput,
} from 'react-native';
import { CheckBox, Divider } from 'react-native-elements';
import TimePicker from 'react-native-24h-timepicker';

import styles from './styles';

class Menu extends React.Component {
  timePicker = {
    open: () => {},
    close: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      minimumSpeedChecked: false,
      minimumSpeed: 2,
      timerChecked: false,
      timerMinutes: '5',
      timerSeconds: '00',
      jumpsCountChecked: false,
      jumpsCount: '1000',
    };
  }

  toggleMinimumSpeed = () => this.setState(({ minimumSpeedChecked }) => ({ minimumSpeedChecked: !minimumSpeedChecked }));

  toggleTimer = () => this.setState(({ timerChecked }) => ({ timerChecked: !timerChecked, jumpsCountChecked: false }));

  toggleJumpsCount = () => this.setState(({ jumpsCountChecked }) => ({ jumpsCountChecked: !jumpsCountChecked, timerChecked: false }));

  updateMinimumSpeed = (newValue) => this.setState({ minimumSpeedChecked: true, minimumSpeed: newValue });

  updateJumpsCount = (newValue) => this.setState({ jumpsCountChecked: true, timerChecked: false, jumpsCount: newValue });

  updateTimer = (minutes, seconds) => {
    this.setState({
      timerMinutes: minutes,
      timerSeconds: seconds,
      timerChecked: true,
      jumpsCountChecked: false,
    });
    this.timePicker.close();
  }

  setTimePicker = (ref) => {
    this.timePicker = ref;
  }

  render() {
    const {
      minimumSpeedChecked, minimumSpeed, timerChecked, timerMinutes, timerSeconds, jumpsCountChecked, jumpsCount,
    } = this.state;

    return (
      <View>
        <View style={styles.options}>
          <View style={styles.option}>
            <CheckBox checkedColor="#00d0c0" checked={minimumSpeedChecked} onPress={this.toggleMinimumSpeed} />
            <Text style={styles.optionText}>Set minimum speed</Text>
            <Picker style={minimumSpeedChecked ? styles.picker : styles.pickerUnselected} selectedValue={minimumSpeed} onValueChange={this.updateMinimumSpeed}>
              { Array(20).fill(0).map((_, i) => (<Picker.Item key={i} label={(2 + i / 10).toString()} value={(2 + i / 10)} />)) }
            </Picker>
            <Text style={styles.optionText}>jumps / sec</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.option}>
            <CheckBox checkedColor="#00d0c0" checked={timerChecked} onPress={this.toggleTimer} />
            <Text style={styles.optionText}>Set a timer</Text>
            <Text style={timerChecked ? styles.picker : styles.pickerUnselected} onPress={this.timePicker.open}>{`${timerMinutes}:${timerSeconds}`}</Text>
          </View>
          <View style={styles.option}>
            <CheckBox checkedColor="#00d0c0" checked={jumpsCountChecked} onPress={this.toggleJumpsCount} />
            <Text style={styles.optionText}>Set a jump count</Text>
            <TextInput style={jumpsCountChecked ? styles.picker : styles.pickerUnselected} keyboardType="number-pad" onChangeText={this.updateJumpsCount} value={jumpsCount} />
          </View>
        </View>
        <View style={styles.start}>
          <Text style={styles.startText}>Start</Text>
        </View>
        <TimePicker ref={this.setTimePicker} onCancel={this.timePicker.close} onConfirm={this.updateTimer} maxHour={59} />
      </View>
    );
  }
}

export default Menu;
