import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticados';
import { RutasAutenticadas } from './Componentes/Autenticado/RutasAutenticadas';

class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram-clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <RutasAutenticadas />
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
