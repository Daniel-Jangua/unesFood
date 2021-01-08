import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, SafeAreaView, ScrollView} from 'react-native';
import {css} from '../assets/css/Css';

export default function CadCli(props){
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
                    placeholder='Nome de Usuário'
                />
                
                <TextInput
                    style={css.input}
                    placeholder='Email'
                />

                <TextInput
                    style={css.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                />

                <TextInput
                    style={css.input}
                    placeholder='Nome Completo'
                />

                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={9}
                    placeholder='Número de Celular'
                />

                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={11}
                    placeholder='CPF'
                />

                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={8}
                    placeholder='Data de nascimento (ex: 05101999)'
                />

                <TouchableOpacity
                    style={css.botao}
                    onPress={()=>{Alert.alert('Criando conta')}}
                >
                <Text style={css.textoBotao}>Criar</Text>
                </TouchableOpacity>

            </View> 
        </ScrollView>
        </SafeAreaView>
    );
}