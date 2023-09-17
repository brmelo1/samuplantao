import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',      
    justifyContent:'center',      
  },
  campoBtn:{
    backgroundColor:"#f58635",
    flex:2,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    // borderBottomLeftRadius:15,
    // borderBottomRightRadius:15
  },
  btn:{
    flex:1,
    // backgroundColor: '#f23',
    justifyContent:'center',
    marginHorizontal:15,
  }, 
  botao:{
    marginTop:0,
    backgroundColor: '#d83135',
    padding: 15,
    borderRadius: 10,
    alignItems:'center',
  },
  buttonText:{
    color:"#FFF",
    fontWeight:"bold",
    fontSize:22,    
  },
  tituloTelaInicial:{
    alignItems:"center",
    marginTop:25,
    paddingStart:25,
    paddingEnd:25
  },
  textoTituloTelaInicial:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:27,
    color:"#FFF",
  },
  campoEquipes:{
    flex:1,
    backgroundColor:"#f0f0f0",
  },
  listaEquipes:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
    margin:1.5,
    backgroundColor:"rgba(0,0,0,.05);",
    height:40,
  },
  savedItem:{
    fontSize:15,
    color:"black",
    // fontWeight:"bold",
    marginRight:3
  },
  botaoexcluir:{
    backgroundColor:'#B22222',
    height:27,
    width:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    margin:0.5

  },
  botaoalterar:{
    backgroundColor:'#fff600',
    height:27,
    width:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    margin:0.5,
  },
  botaofinalizar:{
    backgroundColor:'#09ee06',
    height:27,
    width:60,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    margin:0.5
  },
  txtfi:{
    color:"#323232",
    fontWeight:"bold"
  },
  txtal:{
    color:"#323232",
    fontWeight:"bold"
  },
  txtex:{
    color:"#FFF",
    fontWeight:"bold"
  }
});
