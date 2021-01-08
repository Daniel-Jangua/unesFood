import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image } from 'react-native';
import {css} from '../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginVend(props){

    const [user, setUser]=useState(null);
    const [senha, setSenha]=useState(null);
    const [login, setLogin]=useState(null);

    //Envio do formulário de login
    async function sendForm(){
        let response = await fetch('http://192.168.0.104:3000/loginVend', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: user,
                senha: senha
            })
        });
        let json = await response.json();
        if(json === 'error'){
            Alert.alert('Erro','Usuário ou senha inválidos!');
            await AsyncStorage.clear();
        }else{
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
        }
    }

    return(
        <View style={css.container}>

                <Image
                    source={require('../assets/img/icon.png')}   
                    style={css.logo} 
                />

                <TextInput
                    style={css.input}
                    placeholder='Nome de Usuário'
                    onChangeText={text=>setUser(text)}
                />

                <TextInput
                    style={css.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={text=>setSenha(text)}
                />

                <TouchableOpacity
                    style={css.botao}
                    //onPress={()=>props.navigation.navigate('Inicio')}
                    onPress={()=>sendForm()}
                >
                    <Text style={css.textoBotao}>Entrar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={()=>{Alert.alert('Recuperar Senha')}}
                >
                    <Text style={css.textoLink}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                
                <View style={css.bottom}>
                    <Text style={{
                        marginTop: 10,
                        textAlign: 'center'
                    }}>
                        Ainda não possui cadastro?
                        Registre-se aqui!
                    </Text>
                    
                    <TouchableOpacity
                        style={css.botao}
                        onPress={()=>props.navigation.navigate('CadVend')}
                    >
                        <Text style={css.textoBotao}>Novo Vendedor</Text>
                    </TouchableOpacity>
                </View>
     
        </View>
    );
}