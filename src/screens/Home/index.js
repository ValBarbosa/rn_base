import React, {Component} from 'react';
import {View, Text, ImageBackground, Image,TouchableOpacity}  from "react-native";

export default class Home extends Component{
    state = {
        num: '2160',
        Token: 'UfmXEH4PIr0la3n',
        data:[],
    }
    async componentDidMount(){
        await fetch(`http://confiraloterias.com.br/api0/json.php?formato=json&loteria=megasena&concurso=${this.state.num}&token=${this.state.Token}`)
        .then(response =>{
            return response.json()
        })
        .then(data => {
            this.setState({
                data: data.concurso.dezenas
            })
        })
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
             <Text style={{marginLeft: 35,marginTop: 10, color: 'rgba(255,255,255, 0.5)', fontSize: 20}}> "Pra sorte todo mundo é igual. O proximo ganhador pode ser você" </Text>
             <View style={{display: 'flex', flex: 1, flexDirection: 'row', marginLeft:90, marginTop:40}}>
             <Image style={{width:30, height:30, }} source = { require('./icon.png')} />
             <Text style={{marginLeft:30, fontWeight: 'bold', color: 'white', fontSize: 20}}>Mega-Sena</Text>
             </View>
             <View style={{display: 'flex', flex: 1, flexDirection: 'row', marginLeft:30, marginTop:20}} >
                <Text style={{marginTop:-160,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[0]}</Text>
                <Text style={{marginTop:-160,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[1]}</Text>
                <Text style={{marginTop:-160,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[2]}</Text>
                <Text style={{marginTop:-160,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[3]}</Text>
                <Text style={{marginTop:-160,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[4]}</Text>
                <Text style={{marginTop:-160,borderRadius:50, color:'#38B0DE', backgroundColor: 'white', height:50, width:50, fontSize:35, paddingLeft:5}}>{this.state.data[5]}</Text>
            <View style={{marginLeft: -280,marginTop: -90,display: 'flex', flex: 1, flexDirection: 'row',}}>
             <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Concurso:  </Text>
             <Text style={{ color: 'white', fontSize: 30}}>{this.state.num}</Text>
             <View>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('Pesquisa')} style={{backgroundColor: 'orange', width:200, height:50,marginTop:100,marginLeft: -180 }}>
                <Text style={{color: 'white',marginLeft: 35,marginTop: 10  }}>VEJA OS SORTEIOS</Text>
            </TouchableOpacity>
            </View>
             </View>
           
             </View>
             
            </ImageBackground>

           </View>
  
        );
    }
}
