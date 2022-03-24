import React,{Component} from "react";
import BottomTabNavigator  from './components/BottomTabNavigator';
import {
  useFonts,
  Rajdhani_300Light,
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import * as Font from 'expo-font';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      fontLoaded:false,


    }
  }
  async loadFonts()
  {
    await Font.loadAsync({
      Rajdhani_600SemiBold:Rajdhani_600SemiBold,

    });
    this.setState({ fontLoaded:true });
  }

componentDidMount(){
  this.loadFonts()
}
  render(){
    const {fontLoaded}=this.state
    if(fontLoaded){
      return <BottomTabNavigator/>
    }
    else{
      return null;
    }


   }
}

