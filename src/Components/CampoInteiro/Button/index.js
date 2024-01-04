import React from "react";
import { TouchableOpacity, Text } from "react-native";
import estilosBotao from './estilosBotao';
import funcaoEstilosPadrao from './estilosBotao';

export default function Botao({ pequeno = false, invertido = false, valor, acao, estilos }) {

    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

    return <>
        <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
            <Text style={estilosPadrao.valor} > {valor} </Text>
        </TouchableOpacity>

    </>
}