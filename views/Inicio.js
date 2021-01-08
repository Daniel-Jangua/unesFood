import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, BackHandler } from 'react-native';
import {css} from '../assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Pesquisa from './Pesquisa';
import Carrinho from './Carrinho';
import Perfil from './Perfil';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Inicio(props){
    const Tab = createMaterialBottomTabNavigator();

    useEffect(() => {
      const backAction = () => {
        Alert.alert("Alerta", "Tem certeza que deseja sair?", [
          {
            text: "Não",
            onPress: () => null,
            style: "cancel"
          },
          { text: "Sim", onPress: () => {
            props.navigation.navigate('Home');
            //BackHandler.exitApp()
          } }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);

    return(
      
      <Tab.Navigator
        initialRouteName="Pesquisa"
        activeColor="#fff"
        inactiveColor="#A6E1FF"
        barStyle={{ backgroundColor: '#66bbff'}}
      >
        <Tab.Screen 
          name="Pesquisa" 
          component={Pesquisa}
          options={{
            tabBarIcon:()=>(
              <Icon name="search" size={20} color="#fff"/>
            )
          }}
        />
        <Tab.Screen 
          name="Carrinho" 
          component={Carrinho}
          options={{
            tabBarIcon:()=>(
              <Icon name="shopping-cart" size={20} color="#fff"/>
            )
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil} 
          options={{
            tabBarIcon:()=>(
              <Icon name="user" size={20} color="#fff"/>
            )
          }}
        />
        
      </Tab.Navigator>
    );
}