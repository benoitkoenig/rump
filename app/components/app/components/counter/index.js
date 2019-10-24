import { Camera } from 'expo-camera';
import React from 'react';
import { Text, View } from 'react-native';
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

const mapDispatchToProps = () => ({});

const Counter = ({ minimumSpeedChecked, minimumSpeed, timerChecked, timerMinutes, timerSeconds, jumpsCountChecked, jumpsCount }) => {
  return (
    <View>
        <Camera style={styles.camera} type={Camera.Constants.Type.front}>
        </Camera>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
