import React from "react";
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Item from "./Item";
import TelaPadrao from "../../Components/TelaPadrao";

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

        <TelaPadrao>
            <FlatList
                data={servicos}
                removeClippedSubviews={false}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </TelaPadrao>

    </>
}