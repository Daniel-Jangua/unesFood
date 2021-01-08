import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image } from 'react-native';
import {css} from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil(props){

    const [user,setUser] = useState({
        login: '',
        email: '',
        nome: '',
        num_celular: '',
        cpf: '',
        data_nasc: ''
    });

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

    //logout
    function logout(){
        Alert.alert("Alerta", "Tem certeza que deseja sair?", [
            {
              text: "Não",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sim", onPress: () => {
              props.navigation.navigate('Home');
            } }
          ]);
    }
   
    return(
        <View style={css.container22}>
            <View style={css.container_perfil}>
                <Image
                    source={require('../assets/img/perfil-pic.png')}   
                    style={css.perfil_foto} 
                />
            </View>


            <View style={css.container2Perfil}>
                <View style={css.cont_dados_perfil}>
                    <Text style={css.text_dado_perfil}>
                        Nome de Usuário:
                    </Text>
                    <Text>{user.login}</Text>
                </View>
                <View style={css.cont_dados_perfil}>
                    <Text style={css.text_dado_perfil}>
                        Email:
                    </Text>
                    <Text>{user.email}</Text>
                </View>
                <View style={css.cont_dados_perfil}>
                    <Text style={css.text_dado_perfil}>
                        Nome de Completo:
                    </Text>
                    <Text>{user.nome}</Text>
                </View>
                <View style={css.cont_dados_perfil}>
                    <Text style={css.text_dado_perfil}>
                        Número de Celular:
                    </Text>
                    <Text>{user.num_celular}</Text>
                </View>
                <View style={css.cont_dados_perfil}>
                    <Text style={css.text_dado_perfil}>
                        CPF:
                    </Text>
                    <Text>{user.cpf}</Text>
                </View>
                <View style={css.cont_dados_perfil}>
                    <Text style={css.text_dado_perfil}>
                        Data de Nascimento:
                    </Text>
                    <Text>{user.data_nasc}</Text>
                </View>
                   
            </View>


            <View style={css.container_botoes_perfil}>
                <TouchableOpacity 
                    style={css.botao_perfil}
                    
                >
                    <Text style={css.textoBotao}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={css.botao_perfil}
                    onPress={()=>logout()}
                >
                    <Text style={css.textoBotao}>Sair</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}