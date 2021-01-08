import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert, Image, FlatList, SafeAreaView} from 'react-native';
import {css} from '../assets/css/Css';
import { Searchbar } from 'react-native-paper';

export default function Pesquisa(props){

    const [searchQuery, setSearchQuery] = React.useState('');
    const [lista, setLista] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

      
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

    function formatedNumber(num, casas){
        return num.toFixed(casas);
    }
 

    return(
        <View style={{flex:1}}>
        <Searchbar
            placeholder="Pesquisar"
            onChangeText={onChangeSearch}
            onIconPress={()=>sendBusca()}
            value={searchQuery}
        />
        <Text style={css.sugestion}>
            Vendedores
        </Text>
        <View style={{flex:1}}>
        <FlatList
            //style={{flex:1}}
            data={lista}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=>(
                <TouchableOpacity
                    onPress={()=>props.navigation.navigate('CardapioCli',item)}
                >
                    <View style={css.container_item_lista}>
                        <Image
                            source={require('../assets/img/perfil-pic.png')}   
                            style={css.foto_item_lista} 
                        />
                        <View style={{flexDirection:'column'}}>
                            <Text style={css.texto_item_lista}>{item.nome}</Text>
                            <Text style={css.dados_item_lista}>Online</Text>
                        </View>
                        <Text style={{marginTop:15,fontSize:16}}>{formatedNumber(item.nota_avaliacao,1)}</Text>
                        <Image
                            source={require('../assets/img/star.png')}   
                            style={css.icone_avaliacao} 
                        />
                    </View>
                </TouchableOpacity>
            )}
            
        />
        </View>

        </View>
    );
}