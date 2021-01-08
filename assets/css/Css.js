import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFEFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPage:{
        backgroundColor: 'orange',
        padding: 20
    },
    botao: {
        marginVertical: 20,
        width:300,
        height:42,
        backgroundColor: '#66bbff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoBotao:{
        fontSize:16,
        fontWeight:'bold',
        color: '#fff'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginVertical:10
    },
    input: {
        padding: 10,
        marginTop: 10,
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    textoLink: {
        color: '#66bbff',
        textAlign: 'left',
        marginTop: 20
    },
    bottom: {
        //flex: 1,
        //justifyContent: 'flex-end',
        //marginBottom: 36,
        marginTop: 10,
        borderTopColor: 'black',
        borderTopWidth: 1
    },
    container2: {
        flex: 1,
       // marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 42,
        padding: 20
    },
    sugestion: {
        fontSize: 36,
        fontWeight: 'bold',
        color:'#66bbff',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#CFEFFF',
        padding: 20
    }
  });

export{css};