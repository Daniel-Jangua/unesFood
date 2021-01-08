import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, FlatList, SafeAreaView} from 'react-native';
import {css} from '../assets/css/Css';

export default function CardapioCli(props){
    return(
        <View>
            <Text>{props.route.params.nome}</Text>
        </View>
    );
}