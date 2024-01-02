import React from "react";
import { Text, SafeAreaView, StatusBar } from 'react-native';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 150.50,
        descricao: "Banho e Tosa"
    },

    {
        id: 2,
        nome: "Vacina dor",
        preco: 200,
        descricao: "1 Dose 10 ml por KG"
    },

    {
        id: 3,
        nome: "Relaxamento para gatos",
        preco: 450,
        descricao: "Deixe seu animal mais relaxado e sem estres"
    }
];

export default function Servicos() {
    return <>
        <SafeAreaView>
            <StatusBar />
            <Text>Serviços</Text>
        </SafeAreaView>
    </>
}