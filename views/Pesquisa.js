import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, FlatList} from 'react-native';
import {css} from '../assets/css/Css';
import { Searchbar } from 'react-native-paper';

export default function Pesquisa(props){

        const [searchQuery, setSearchQuery] = React.useState('');
      
        const onChangeSearch = query => setSearchQuery(query);

    return(
        <View>
        <Searchbar
            placeholder="Pesquisar"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <Text style={css.sugestion}>
            Sugestões
        </Text>
        </View>
    );
}