// importando biblioteca para trablhar com valores monetários
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Rotas from './src/routes/Rotas';
import TelaPadrao from './src/Components/TelaPadrao';

export default function App() {
  return <>
    <Rotas />
  </>
}
