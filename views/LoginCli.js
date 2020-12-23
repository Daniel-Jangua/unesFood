import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image } from 'react-native';
import {css} from '../assets/css/Css';

export default function LoginCli(props){
    return(
        <View style={css.container}>

                <Image
                    source={require('../assets/img/icon.png')}   
                    style={css.logo} 
                />

                <TextInput
                    style={css.input}
                    placeholder='Nome de Usuário'
                />

                <TextInput
                    style={css.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={css.botao}
                    onPress={()=>{Alert.alert('Fazendo Login')}}
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
                        onPress={()=>props.navigation.navigate('CadCli')}
                    >
                        <Text style={css.textoBotao}>Novo Cliente</Text>
                    </TouchableOpacity>
                </View>
     
        </View>
    );
}