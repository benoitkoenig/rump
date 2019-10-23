import * as Permissions from 'expo-permissions';
import React from 'react';
import { View } from 'react-native';

import AskCameraPermission from './components/askCameraPermission';
import Header from './components/header';
import Menu from './components/menu';

import styles from './styles';

class App extends React.Component {
  state = {
    hasCameraPermission: null,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  askPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        { hasCameraPermission === false ? <AskCameraPermission ask={this.askPermission} /> : <Menu /> }
      </View>
    )
  }
}

export default App;
