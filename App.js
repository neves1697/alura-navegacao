import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Servicos from './src/Screens/Servicos';

// importando biblioteca para trablhar com valores monetários

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Carrinho from './src/Screens/Carrinho';
import Rotas from './src/routes/Rotas';

export default function App() {
  return <>
    <Rotas />
  </>
}
