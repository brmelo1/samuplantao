import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    width:"100%",
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
    marginBottom:10,      
  },
  dropdown: {
    flex:1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginLeft:5,
    marginRight:5,
     
    
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
 form:{
    flex:1,
    justifyContent: 'space-around', 
    flexDirection:'row', 
    alignItems:'center',
    marginTop:20,
    marginBottom:0 
  },
  btn:{
    paddingStart:5,
    paddingEnd:5,
    justifyContent:'center',       
  },
  info:{
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    flex:1,
    fontSize:15,
    justifyContent:'center',
    paddingStart:7,
    marginTop:10  
  },
  textInfo: {
    fontSize:16,
    fontWeight:"bold"
  },
  pessoa:{
    paddingStart:5,
    paddingEnd:5,
    justifyContent:'center',            
  },
  listapessoa:{
    marginTop:25,
    paddingStart:5,
    paddingEnd:5,
    justifyContent:'center',
    minHeight:0,
    maxHeight:190,    
    overflow:"auto",
    backgroundColor:"#cecece"
  },   
  dropdownpessoa: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop:10,
    marginBottom:10
  }, 
  savedItem: {
    fontSize: 16,
    marginVertical: 5,
  },
    savedItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft:10,
    marginRight:10,
    marginVertical: 5,
},
savedItem: {
    fontSize: 16,
}, 
botao:{
  backgroundColor: '#3498db',
  padding: 10,
  borderRadius: 5,
  alignItems:'center',
},
buttonText: {
  borderRadius:20,
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',    
},  
botaoexcluir:{
  backgroundColor:'#B22222',
  height:40,
  width:100,
  borderRadius:20,
  alignItems:'center',
  justifyContent:'center',
},
finalizar:{
  flex:2,
  flexDirection:'row',
  justifyContent: 'space-around', 
  alignItems:'center',   

},
botaocancela:{
  backgroundColor:'#FFD700',
  height:50,
  width:150,
  borderRadius:20,
  alignItems:'center',
  justifyContent:'center',
},
botaosalva:{
  backgroundColor:'#00FF7F',
  height:50,
  width:150,
  borderRadius:20,
  alignItems:'center',
  justifyContent:'center',
},
txtex:{
  fontWeight:'bold',
  fontSize:16,
},

containerLogoSamu: {
  width:"100%",
},
logoSamu:{
  width:150,
  height:75,
}
});
