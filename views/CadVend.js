import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, SafeAreaView, ScrollView} from 'react-native';
import {css} from '../assets/css/Css';

export default function CadVend(props){

    const [user,setUser] = useState(null);
    const [senha,setSenha] = useState(null);
    const [nome,setNome] = useState(null);
    const [email,setEmail] = useState(null);
    const [num,setNum] = useState(null);
    const [ra,setRa] = useState(null);
    const [cpf,setCpf] = useState(null);
    const [dataNasc,setDataNasc] = useState(null);

    //envio do formulário
    async function sendForm(){
        let response = await fetch('http://192.168.0.103:3000/cadVend',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                ra: ra,
                num_celular: num,
                data_nasc: dataNasc,
                email: email,
                login: user,
                senha: senha,
                nota_avaliacao: 5.0
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
                    placeholder='Nome de Usuário'
                    onChangeText={text=>setUser(text)}
                />

                <TextInput
                    style={css.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={text=>setSenha(text)}
                />

                <TextInput
                    style={css.input}
                    placeholder='Nome Completo'
                    onChangeText={text=>setNome(text)}
                />

                <TextInput
                    style={css.input}
                    placeholder='Email'
                    onChangeText={text=>setEmail(text)}
                />

                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={9}
                    placeholder='Número de Celular'
                    onChangeText={text=>setNum(text)}
                />
            
                 <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={9}
                    placeholder='RA'
                    onChangeText={text=>setRa(text)}
                />

                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={11}
                    placeholder='CPF'
                    onChangeText={text=>setCpf(text)}
                />

                <TextInput
                    style={css.input}
                    keyboardType='numeric'
                    maxLength={10}
                    placeholder='Data de nascimento (ex: 05/10/1999)'
                    onChangeText={text=>setDataNasc(text)}
                />

                <TouchableOpacity
                    style={css.botao}
                    onPress={()=>{sendForm()}}
                >
                <Text style={css.textoBotao}>Criar</Text>
                </TouchableOpacity>

            </View> 
        </ScrollView>
        </SafeAreaView>
    );
}