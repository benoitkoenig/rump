/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Text, View, Picker, TextInput } from 'react-native';
import { CheckBox, Divider } from 'react-native-elements';
import TimePicker from 'react-native-24h-timepicker';
import { connect } from 'react-redux';

import styles from './styles';

const mapStateToProps = ({
  minimumSpeedChecked,
  minimumSpeed,
  timerChecked,
  timerMinutes,
  timerSeconds,
  jumpsCountChecked,
  jumpsCount,
}) => ({
  minimumSpeedChecked,
  minimumSpeed,
  timerChecked,
  timerMinutes,
  timerSeconds,
  jumpsCountChecked,
  jumpsCount,
});

const mapDispatchToProps = (dispatch) => ({
  start: () => dispatch({ type: 'START' }),
  toggleMinimumSpeed: () => dispatch({ type: 'TOGGLE_MINIMUM_SPEED' }),
  toggleTimer: () => dispatch({ type: 'TOGGLE_TIMER' }),
  toggleJumpsCount: () => dispatch({ type: 'TOGGLE_JUMPS_COUNT' }),
  updateMinimumSpeed: (minimumSpeed) => dispatch({ type: 'UPDATE_MINIMUM_SPEED', minimumSpeed }),
  updateTimer: (minutes, seconds) => dispatch({ type: 'UPDATE_TIMER', minutes, seconds }),
  updateJumpsCount: (jumpsCount) => dispatch({ type: 'UPDATE_JUMPS_COUNT', jumpsCount }),
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePicker: {
        open: () => {},
        close: () => {},
      },
    };
  }

  updateTimer = (minutes, seconds) => {
    this.props.updateTimer(minutes, seconds);
    this.state.timePicker.close();
  }

  setTimePicker = (ref) => {
    this.setState({ timePicker: ref });
  }

  render() {
    const {
      start,
      minimumSpeedChecked,
      minimumSpeed,
      timerChecked,
      timerMinutes,
      timerSeconds,
      jumpsCountChecked,
      jumpsCount,
      toggleMinimumSpeed,
      toggleTimer,
      toggleJumpsCount,
      updateMinimumSpeed,
      updateJumpsCount,
    } = this.props;

    const { timePicker } = this.state;

    return (
      <View>
        <View style={styles.options}>
          <View style={styles.option}>
            <CheckBox checkedColor="#00d0c0" checked={minimumSpeedChecked} onPress={toggleMinimumSpeed} />
            <Text style={styles.optionText}>Set minimum speed</Text>
            <Picker style={minimumSpeedChecked ? styles.picker : styles.pickerUnselected} selectedValue={minimumSpeed} onValueChange={updateMinimumSpeed}>
              { Array(20).fill(0).map((_, i) => (<Picker.Item key={i} label={(2 + i / 10).toString()} value={(2 + i / 10)} />)) }
            </Picker>
            <Text style={styles.optionText}>jumps / sec</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.option}>
            <CheckBox checkedColor="#00d0c0" checked={timerChecked} onPress={toggleTimer} />
            <Text style={styles.optionText}>Set a timer</Text>
            <Text style={timerChecked ? styles.picker : styles.pickerUnselected} onPress={timePicker.open}>{`${timerMinutes}:${timerSeconds}`}</Text>
          </View>
          <View style={styles.option}>
            <CheckBox checkedColor="#00d0c0" checked={jumpsCountChecked} onPress={toggleJumpsCount} />
            <Text style={styles.optionText}>Set a jump count</Text>
            <TextInput style={jumpsCountChecked ? styles.picker : styles.pickerUnselected} keyboardType="number-pad" onChangeText={updateJumpsCount} value={jumpsCount} />
          </View>
        </View>
        <View style={styles.start}>
          <Text style={styles.startText} onPress={start}>Start</Text>
        </View>
        <TimePicker ref={this.setTimePicker} onCancel={timePicker.close} onConfirm={this.updateTimer} maxHour={59} selectedHour={timerMinutes} selectedMinutes={timerSeconds} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
