import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, FlatList, ScrollView} from 'react-native';
import {css} from '../assets/css/Css';
import { Searchbar } from 'react-native-paper';

export default function Pesquisa(props){

    const [searchQuery, setSearchQuery] = React.useState('');
    const [lista, setLista] = useState(null);
      
    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => {
        sendBusca();
    }, [])

    //Realizar a busca
    async function sendBusca(){
        onChangeSearch;
        let response = await fetch('http://192.168.0.104:3000/buscaVend', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: searchQuery
            })
        });
        let json = await response.json();
        setLista(json);
        //console.log(json);
    }

    //sendBusca();

    return(
        <View>
        <Searchbar
            placeholder="Pesquisar"
            onChangeText={onChangeSearch}
            onIconPress={()=>sendBusca()}
            value={searchQuery}
        />
        <Text style={css.sugestion}>
            Vendedores
        </Text>

        <FlatList
            data={lista}
            keyExtractor={item => item.nome.toString()}
            renderItem={({item})=>(
                <View style={css.container_item_lista}>
                    <Image
                        source={require('../assets/img/perfil-pic.png')}   
                        style={css.foto_item_lista} 
                    />
                    <Text style={css.texto_item_lista}>{item.nome}</Text>
                </View>
            )}
            
        />

        </View>
    );
}