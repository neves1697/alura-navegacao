import React from "react";
// navegação
import { NavigationContainer } from "@react-navigation/native";
// importando botoes navegação
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//importando componentes criados
import Servicos from "../Screens/Servicos";
import Carrinho from "../Screens/Carrinho";
import { cores } from "../estilos";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <>
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: cores.roxo
                    , inactiveTintColor: cores.claro
                    , activeBackgroundColor: cores.roxo
                    , inactiveBackgroundColor: cores.laranja
                    , style: {
                        height: 70
                    }
                    , labelStyle: {
                        width: '100%'
                        , flex: 1
                        , fontWeight: 'bold'
                        , fontSize: 16
                        , lineHeight: 21
                        , marginTop: 3
                        , paddingTop: 21
                        , backgroundColor: cores.laranja
                    },
                    //quando abrir o teclado a Tab Bar não vai mais aparecer
                    keyboardHidesTabBar: true
                }}
            >
                <Tab.Screen name="Serviços" component={Servicos} />
                <Tab.Screen name="Carrinho" component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer>
    </>
}