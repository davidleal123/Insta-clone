import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticados';
import { RutasAutenticadas } from './Componentes/Autenticado/RutasAutenticadas';
import Store from './Store/Store';

class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram-clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <RutasNoAutenticadas />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
