import { Camera } from 'expo-camera';
import React from 'react';
import { View } from 'react-native';
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

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { camera: null };
  }

  cyclePicture = async (camera) => {
    const { base64 } = await camera.takePictureAsync({ base64: true, skipProcessing: true });
    this.cyclePicture(camera);
  }

  ref = (camera) => {
    this.setState({ camera });
    this.cyclePicture(camera);
  }

  render() {
    return (
      <View>
          <Camera ref={this.ref} style={styles.camera} type={Camera.Constants.Type.front}>
          </Camera>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
