import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Servicos from './src/Telas/Servicos';

// importando biblioteca para trablhar com valores monetários

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  return (
    <View>
      <Servicos />
    </View>
  );
}
