import React from "react";
import { FlatList } from 'react-native';
import Item from "./Item";
import StatusCarrinho from "../../Components/StatusCarrinho";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 150.50,
        descricao: "Banho e Tosa",
        quantidade: 1
    },

    {
        id: 2,
        nome: "Vacina dor",
        preco: 200,
        descricao: "1 Dose 10 ml por KG",
        quantidade: 2
    },

    {
        id: 3,
        nome: "Relaxamento para gatos",
        preco: 450,
        descricao: "Deixe seu animal mais relaxado e sem estres",
        quantidade: 3
    }
];

export default function Carrinho() {

    const total = servicos.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade), 0);

    return <>

        <StatusCarrinho total={total} />
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />

    </>
}