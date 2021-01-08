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
    },
    container2: {
        flex: 1,
        alignContent:'flex-start',
        
    },
    container22: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#CFEFFF',
        flexDirection: 'column'
    },
    container_fora: {
        //  flex: 1,
        backgroundColor: '#fff',
        //alignContent:'flex-start',
        
    },
    scrollView: {
        backgroundColor: '#CFEFFF',
        //marginHorizontal: 20,
    },
    
    text: {
        fontSize: 16,
        marginLeft: 10
        
    },
    texto_perfil: {
        fontSize: 18,
        // padding:,
        fontWeight:'bold',      
        alignItems: "center",
        
        // backgroundColor: '#A9A9A9'
        marginLeft: 30,
        marginRight: 10
    },
    text_perf2: {
        fontSize: 20,
        // padding:,
        fontWeight:'bold',
        
        // backgroundColor: '#A9A9A9'
        marginLeft: 10
    },
    text_produto: {
        fontSize: 16,
        fontWeight:'bold',      
        paddingRight:100,        
        //marginLeft: 10
    },
    text_qtd: {
        fontSize: 16,
        fontWeight:'bold',
        paddingHorizontal:10,
        //marginLeft: 10
    },
    text_valor: {
        fontSize: 16,
        fontWeight:'bold',
        paddingLeft:10,        
        paddingRight:30,
        //marginLeft: 10
    },
    text_mais: {
        fontSize: 16,
        fontWeight:'bold',
        paddingHorizontal:5,
        //marginLeft: 10
    },
    text_menos: {
        fontSize: 16,
        fontWeight:'bold',
        paddingHorizontal:5,
        //marginLeft: 10
    },
    fora_scroll: {
        fontSize: 16,
        fontWeight:'bold',
        marginLeft: 5,
    },
    menu:{
        flexDirection:'row',
        marginBottom:20,
        backgroundColor:'#fff'
    },
    bota:{
        width:300,
        height:42,
        // backgroundColor: '#66bbff',
        borderRadius: 4,
    },
    container_item_lista:{
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#CFEFFF',
        flexDirection: 'row'
    },
    container_item_lista:{
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    foto_item_lista:{
        width: 80,
        height: 80,
        borderRadius: 100
    },
    texto_item_lista:{
        fontSize: 16,
        width: 160,
        padding: 10,
        color: '#7A7A76',
        fontWeight: 'bold'
    },
    icone_avaliacao:{
        width: 25,
        height: 25,
        //borderRadius: 100,
        marginTop: 10,
        marginLeft:10
    },
    icone_avaliacao2:{
        width: 25,
        height: 25,
        //borderRadius: 100,
        //marginTop: 10,
        marginRight:5,
        marginLeft: 20
    },
    dados_item_lista:{
        paddingLeft: 10,
        color: 'green'
    },
    container_perfil: {
        //flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        //backgroundColor: '#fff',
        alignItems: "center",
        flexDirection: 'row'
    },
    perfil_foto: {
        width: 100,
        height: 100,
        borderRadius: 100,
        paddingLeft: 20,
        paddingRight: 30
        // marginVertical:10
    },
    container_cardapio:{
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 20,
        borderTopColor: 'black',
        borderTopWidth: 1
    },
    texto_cardapio: {
        paddingLeft: 10,
        color: 'gray'
    },
    preco:{
        fontSize:16,
        fontWeight:'bold',
        color: 'gray',
        marginTop:10
    },
    container2Perfil: {
        marginTop:20,
        
        flex: 1,
        alignContent:'flex-start',
        flexDirection: "column",
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    container_botoes_perfil:{
        flexDirection:'row',
        alignContent: 'center'
    },
    botao_perfil: {
        //marginTop: 5,
        //marginLeft: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        // paddingHorizontal: 10,
        width: 150,
        height: 42,
        backgroundColor: '#66bbff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cont_dados_perfil: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#CFEFFF",
        // padding: 20,
        margin: 10,
      },
    text_dado_perfil: {
        fontSize: 16,
        fontWeight:'bold',
        // paddingHorizontal:10,
        //marginLeft: 10
    },
    cardapioContainerMenu:{
        flex:1,
        flexDirection:'row'
    },
    cardapioContainerBotoes:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-end'
    },
    cardapioBotao:{
        marginVertical: 20,
        width:120,
        height:60,
        backgroundColor: '#66bbff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardapioContainerLista:{
        flex: 2,
        alignContent:'center',
    }
  });

export{css};