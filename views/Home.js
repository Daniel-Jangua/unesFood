import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {css} from '../assets/css/Css';

export default function Home(props){
    //console.log(props);
    return(
        <View style={css.container}>
            
            <Image
                source={require('../assets/img/icon.png')}   
                style={css.logo} 
            />

           <TouchableOpacity
                style={css.botao}
                onPress={()=>props.navigation.navigate('LoginCli')}
           >
               <Text style={css.textoBotao}>Sou um Cliente</Text>
           </TouchableOpacity>

           <TouchableOpacity
                style={css.botao}
                onPress={()=>props.navigation.navigate('LoginVend')}
           >
               <Text style={css.textoBotao}>Sou um Vendedor</Text>
           </TouchableOpacity>
           <StatusBar style="auto" />
        </View>
    );
}