import React from "react";
import { Text, View } from "react-native";
import Botao from "../CampoInteiro/Button";

// estilos

import estilosCarrinho from "../StatusCarrinho/estilosCarrinho";

export default function StatusCarrinho({ total }) {
    return <>
        <View style={estilosCarrinho.conteudo} >
            <View style={estilosCarrinho.total} >
                <Text style={estilosCarrinho.descricao} >Total do carrinho:</Text>
                <Text style={estilosCarrinho.valor} >
                    {
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }
                </Text>
            </View>

            <View style={estilosCarrinho.botao} >
                <Botao valor='Finalizar Pedido' invertido />
            </View>


        </View>
    </>
}