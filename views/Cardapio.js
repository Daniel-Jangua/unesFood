import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, FlatList } from 'react-native';
import {css} from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cardapio(props){

    const [lista, setLista] = useState(null);
    const [user,setUser] = useState(0);
    const tipo_comida = ['Salgado', 'Doce', 'Bebida'];

    function formatedNumber(num, casas){
        return num.toFixed(casas);
    }

    //Realizar a busca
    async function sendBusca(){
        let response = await fetch('http://192.168.0.103:3000/buscaCard', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: user.id
            })
        });
        console.log(user.id);
        let json = await response.json();
        setLista(json);
        //console.log(json);
    }

    //Excluir item
    async function sendDelete(item){
        let response = await fetch('http://192.168.0.103:3000/deleteCard', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item.id
            })
        });
        Alert.alert('Alerta','Item excluído com sucesso!');
        sendBusca();
    }

    useEffect(() => {
        async function getUser(){
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setUser(json);
        }
        getUser();
    }, []);

    useEffect(() => {
        sendBusca();
    }, [user]);

    function selectItem(item){
        Alert.alert(
            "Opções",
            "O que deseja fazer?",
            [
              {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
              },
              { 
                text: "Editar", onPress: () => null 
              },
              {
                text: 'Excluir', onPress: ()=> sendDelete(item)
              }
            ],
            { cancelable: false }
        );
    }

    return( 
        <View style={css.container}>
            <View style={css.cardapioContainerMenu}>
                <Text style={css.text_produto}>
                    Produto
                </Text>

                <Text style={css.text_qtd}>
                    Preço
                </Text>
            </View>

            <View style={css.cardapioContainerLista}>
                <FlatList
                    data={lista}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item})=>(
                        <TouchableOpacity
                            onPress={()=>selectItem(item)}
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

            <View style ={css.cardapioContainerBotoes}>
                <TouchableOpacity
                    style={css.cardapioBotao}
                    onPress={()=>props.navigation.navigate('CadItem')}
                >
                    <Text style={css.textoBotao}>Inserir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={css.cardapioBotao}
                    onPress={()=>sendBusca()}
                >
                    <Text style={css.textoBotao}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}