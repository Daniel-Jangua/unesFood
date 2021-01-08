import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, FlatList, SafeAreaView} from 'react-native';
import {css} from '../assets/css/Css';

export default function CardapioCli(props){

    const [lista, setLista] = useState(null);

    //Realizar a busca
    async function sendBusca(){
        let response = await fetch('http://192.168.0.104:3000/buscaCard', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.route.params.id
            })
        });
        let json = await response.json();
        setLista(json);
        console.log(json);
    }

    useEffect(() => {
        sendBusca();
    }, [])

    const tipo_comida = ['Salgado', 'Doce', 'Bebida'];

    function formatedNumber(num, casas){
        return num.toFixed(casas);
    }

    return(
        <View style={css.container22}>
            <View style={css.container_perfil}>
                <Image
                    source={require('../assets/img/perfil-pic.png')}  
                     style={css.perfil_foto}
                />
                <Text style={css.texto_perfil}>{props.route.params.nome}</Text>
                <Image
                    source={require('../assets/img/star.png')}   
                    style={css.icone_avaliacao2} 
                />
                <Text style={{fontSize:16}}>{formatedNumber(props.route.params.nota_avaliacao,1)}</Text>
            </View>
            
            <View style={css.container_cardapio}>
                
                <FlatList
                    //style={{flex:1}}
                    data={lista}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item})=>(
                        <TouchableOpacity
                            //onPress={()=>props.navigation.navigate('CardapioCli',item)}
                        >
                            <View style={css.container_item_lista}>
                                <Image
                                    source={require('../assets/img/food-pic.png')}   
                                    style={css.foto_item_lista} 
                                />
                                <View style={{flexDirection:'column'}}>
                                    <Text style={css.texto_item_lista}>{item.nome}</Text>
                                    <Text style={css.texto_cardapio}>{tipo_comida[item.tipo-1]}</Text>
                                </View>
                                <Text style={css.preco}>
                                    R$ {formatedNumber(item.valor,2)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    
                />
                
            </View>

        </View>
    );
}