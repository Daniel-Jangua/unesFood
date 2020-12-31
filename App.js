import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, Text, View, Alert } from 'react-native';
import Page from './views/Page';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, LoginCli, LoginVend, CadCli, CadVend} from './views';

export default function App() {

  /*const [product,setProduct]=useState('bola');
  const [quantity,setQuantity]=useState(0);
  useEffect(()=>{
    if(quantity > 0){
      Alert.alert('Novo produto foi adicionado');
    }
  },[quantity]);
  const props={
    empresa:'UnesFOOD',
    nome: 'Daniel',
    produto: product,
    quantidade: quantity 
  };
  return (
    <View style={css.container}>
      <Text>{product}</Text>
      <Page {...props}/>      
      <Button title='Adicionar Produtos' onPress={()=>setQuantity(quantity+1)}/>
      <StatusBar style="auto" />
    </View>
  );*/
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#66bbff'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center'
      }}>
        <Stack.Screen 
          name="Início" 
          component={Home} 
          options = {{
            title: 'Bem Vindo!'
            //headerShown: false
          }}
        />
        <Stack.Screen name="LoginVend" 
          component={LoginVend} 
          options={{
            title: 'Login: Vendedor'
        }}/>
        <Stack.Screen name="LoginCli" 
          component={LoginCli} 
          options={{
            title: 'Login: Cliente'
        }}/>
        <Stack.Screen name="CadVend" 
          component={CadVend}
          options={{
           title: 'Cadastro: Vendedor'
      }}
         />
        <Stack.Screen name="CadCli"
          component={CadCli}
          options={{
           title: 'Cadastro: Cliente'
      }}
          />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
