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
  },
  btn:{
    flex:1,
    // backgroundColor: '#f23',
    justifyContent:'center',
    marginHorizontal:10,
  }, 
  botao:{
    marginTop:0,
    backgroundColor: '#d83135',
    padding: 20,
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
  }
});
