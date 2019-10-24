import * as Permissions from 'expo-permissions';
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AskCameraPermission from './components/askCameraPermission';
import Counter from './components/counter';
import Header from './components/header';
import Menu from './components/menu';

import styles from './styles';

const mapStateToProps = ({ isMenuVisible }) => ({ isMenuVisible });

const mapDispatchToProps = () => ({});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    };
  }

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
    const { isMenuVisible } = this.props;

    return (
      <View style={styles.container}>
        <Header />
        {
          hasCameraPermission === false ? <AskCameraPermission ask={this.askPermission} />
          : isMenuVisible ? <Menu />
          : <Counter />
        }
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
