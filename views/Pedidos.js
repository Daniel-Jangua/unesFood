import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, FlatList } from 'react-native';
import {css} from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function Pedidos(props){
    return(
        <View style={css.container}>
            <View style={css.cardapioContainerMenu}>
                <Text style={css.pedidosPedido}>
                    Pedidos
                </Text>

            </View>

            <View style={css.cardapioContainerLista}>
            <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item})=>(
            <TouchableOpacity
                //onPress={()=>props.navigation.navigate('CardapioCli',item)}
            >
                <View style={css.container_item_lista}>
                    <Image
                        source={require('../assets/img/perfil-pic.png')}   
                        style={css.foto_item_lista} 
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={css.texto_item_lista}>{item.key}</Text>
                        <Text style={css.texto_cardapio}>Pedido pendente</Text>
                    </View>
                    <TouchableOpacity
                        style={css.pedidosBotao}
                    >
                    <Text style={css.textoBotao}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )}
      />
            </View>

            <View style ={css.cardapioContainerBotoes}>
                <TouchableOpacity
                    style={css.cardapioBotao}
                >
                    <Text style={css.textoBotao}>Aceitar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={css.cardapioBotao}
                >
                    <Text style={css.textoBotao}>Recusar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}