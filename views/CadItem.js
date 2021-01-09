import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, SafeAreaView, ScrollView} from 'react-native';
import {css} from '../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadItem(props){

    const [nome,setNome] = useState(null);
    const [tipo,setTipo] = useState(null);
    const [desc,setDesc] = useState(null);
    const [valor,setValor] = useState(null);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        async function getUser(){
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setUser(json);
            //user = json;
            //console.log(user);
        };
        getUser();
    },[]);

    //envio do formulário
    async function sendForm(){
        let response = await fetch('http://192.168.0.103:3000/cadItem',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                tipo: tipo,
                descricao: desc,
                valor: valor,
                vendedorId: user.id,
                cod_cardapio: 1
            })
        });
        let json = await response.json();
        Alert.alert('Alerta',json);
        props.navigation.goBack(null);
    }

    return(
        
        <SafeAreaView style={css.container2}>
        <ScrollView style={css.scrollView}>
            <View style={css.container}> 
                <Image
                    source={require('../assets/img/icon.png')}   
                    style={css.logo} 
                />

                <TextInput
                    style={css.input}
                    placeholder='Nome do Item'
                    onChangeText={text=>setNome(text)}
                />
                
                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    placeholder='Tipo'
                    onChangeText={text=>setTipo(text)}
                />

                <TextInput
                    style={css.input}
                    placeholder='Descrição'
                    onChangeText={text=>setDesc(text)}
                />

                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={7}
                    placeholder='Valor'
                    onChangeText={text=>setValor(text)}
                />

                <TouchableOpacity
                    style={css.botao}
                    onPress={()=>sendForm()}
                >
                <Text style={css.textoBotao}>Criar</Text>
                </TouchableOpacity>

            </View> 
        </ScrollView>
        </SafeAreaView>
        
    );
}