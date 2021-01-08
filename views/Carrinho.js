import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, SafeAreaView, Button } from 'react-native';
import {css} from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';

export default function Carrinho(props){
    return(
        <SafeAreaView style={css.container2}>
            <ScrollView style={css.scrollView}>
            <View style={css.menu}>
                        <Text style={css.text_produto}>
                            Produto
                        </Text>
                        <Text style={css.text_qtd}>
                            Qtd
                        </Text>
                        <Text style={css.text_valor}>
                            Valor
                        </Text>
                        
                        <Text style={css.text_menos}>
                            Remover
                        </Text>
                    </View>
            </ScrollView>

            <View style={css.container_fora}>
                        <Text style={css.fora_scroll}>
                            Valor Total: 
                        </Text>
                        <Text style={css.fora_scroll}>
                            Local de Entrega:
                        </Text>
                            <Button title='Finalizar Compra' style={css.bota} > 
                            </Button>
                            
                    </View>

        </SafeAreaView>
    );
}