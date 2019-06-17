import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TextInput,TouchableOpacity,KeyboardAvoidingView}  from "react-native";

export default class Pesquisa extends Component{
    state = {
        valor: '',
        token: 'UfmXEH4PIr0la3n   ',
        data:[],
    }

    handlePesquisa = () => {
        let pesquisa = this.state.valor;
        fetch(`http://confiraloterias.com.br/api0/json.php?formato=json&loteria=megasena&concurso=${pesquisa}&token=${this.state.token}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({
                data: data.concurso.dezenas, 
                valor:"",
            })
    
        })
       

       // alert(pesquisa);

      
    }

    

    
    
 
    static navigationOptions = {
      headerTitle : (
        <Image style={{width:150, height:30, marginLeft:10}} source = { require('./fundo.png')} />
      ),
    }
    render(){
        return(
            <View>
            <ImageBackground source={{uri:'https://www.sitegratisgratis.com.br/wp-content/uploads/2017/03/wallpaper-azul-papel-de-parede-azul-fundo.jpg'}} style={{width: '100%', height: '100%'}}>
             <Text style={{marginLeft: 100,marginTop: 10, color: 'white', fontSize: 40, fontWeight: 'bold'}}> Loterias </Text>
             <Text style={{marginLeft: 35,marginTop:-10, color: 'rgba(255,255,255, 0.5)', fontSize: 20}}> "Pra sorte todo mundo é igual. O proximo ganhador pode ser você" </Text>
             <View style={{display: 'flex', flex: 1, flexDirection: 'row', marginLeft:90, marginTop:40}}>
                  <TouchableOpacity  onPressIn={this.handlePesquisa}style={{backgroundColor: 'orange', width:100, height:30, marginTop:50, marginLeft:15 }}>
                    <Text style={{color: 'white', paddingLeft:30, paddingTop:5}}>Buscar</Text>
                        </TouchableOpacity>
            <TextInput onChangeText={valor => this.setState({valor})} value={this.state.valor}style={{height:35, width:280, backgroundColor: 'white',marginLeft:-170}} /> 
     </View>
            </ImageBackground>
<KeyboardAvoidingView behavior="padding" enabled>
           <View style={{display: 'flex', flex: 1, flexDirection: 'row', marginRight:40, marginTop:30, justifyContent: 'flex-end'}} >
 <Text style={{marginTop:-370,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[0]}</Text>
<Text style={{marginTop:-370,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[1]}</Text>
<Text style={{marginTop:-370,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[2]}</Text>
<Text style={{marginTop:-370,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[3]}</Text>
<Text style={{marginTop:-370,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[4]}</Text>
<Text style={{marginTop:-370,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[5]}</Text>
             </View>
 </KeyboardAvoidingView>
           </View>
  
        );
    }
}
