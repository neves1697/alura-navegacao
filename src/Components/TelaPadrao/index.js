import React from "react";
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import estilosServicos, { cores } from '../../estilos';
import Item from "../../Screens/Carrinho/Item";

export default function TelaPadrao({ children }) {
    return <>
        <SafeAreaView>
            <StatusBar backgroundColor={cores.roxo} />

            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} >
                <FlatList
                    removeClippedSubviews={false}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={({ id }) => String(id)}
                />
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    </>
}