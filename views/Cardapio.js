import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image } from 'react-native';
import {css} from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function Cardapio(props){
    return(
        <SafeAreaView style={css.container2}>
            <ScrollView style={css.scrollView}>
           
            <View style={css.cardapioContainerMenu}>
                <Text style={css.text_produto}>
                    Produto
                </Text>

                <Text style={css.text_qtd}>
                    Preço
                </Text>
            </View>

            <View style={css.cardapioContainerLista}>
                <Text>
                    Lista
                </Text>
            </View>

            <View style ={css.cardapioContainerBotoes}>
                <TouchableOpacity
                    style={css.cardapioBotao}
                >
                    <Text style={css.textoBotao}>Inserir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={css.cardapioBotao}
                >
                    <Text style={css.textoBotao}>Excluir</Text>
                </TouchableOpacity>
            </View>

            </ScrollView>
        </SafeAreaView>
    );
}