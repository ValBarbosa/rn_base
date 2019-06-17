import React, {Component} from 'react';
import {View, Text, TextInput,ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import  HomeScreeen  from  "./src/screens/Home" ;
import  PesquisaScreeen  from  "./src/screens/Pesquisa" ;


const AppNavigator = createStackNavigator({
  Home:{
      screen: HomeScreeen
  },
  Pesquisa:{
    screen: PesquisaScreeen
}
});
export default createAppContainer(AppNavigator);


