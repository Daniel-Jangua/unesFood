import React from 'react';
import { View, Text } from 'react-native';
import {css} from '../assets/css/Css';

export default function Page(props){
    return (
        <View>
            <Text style={css.textPage}>
                O nome da empresa é {props.empresa}, o meu é {props.nome}.
                Comprou o produto {props.produto} na quantidade {props.quantidade}.
            </Text>
        </View>
    );
}