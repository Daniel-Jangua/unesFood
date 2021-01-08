import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image } from 'react-native';
import {css} from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export default function Perfil(props){
    
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
        <View style={css.container}>
            <Text>Perfil</Text>
            <TouchableOpacity 
                style={css.botao}
                onPress={()=>logout()}
            >
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}