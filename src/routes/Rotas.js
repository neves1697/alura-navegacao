import React from "react";
// navegação
import { NavigationContainer } from "@react-navigation/native";
// importando botoes navegação
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//importando componentes criados
import Servicos from "../Screens/Servicos";
import Carrinho from "../Screens/Carrinho";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Serviços" component={Servicos} />
                <Tab.Screen name="Carrinho" component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer>
    </>
}