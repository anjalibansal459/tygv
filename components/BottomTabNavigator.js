import React,{Component} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import SearchScreen  from '../Screens/Search'
import TransactionScreen  from '../Screens/Transaction'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
render(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Transaction') {
              iconName = "book"
              
            } else if (route.name === 'Search') {
              iconName = "Search";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
          tabBarOptions={{activeTintColor:"tomato",inActiveTintColor:"black",style:{
            height:150,
            backgroundColor:"#363987",
            borderWidth:20,

          },
          labelStyle:
          {
            fontSize:30,
            fontFamily:"Rajdhani_600SemiBold",
          
          },
          labelPosition:" besideIcon"
          ,
          tabStyle:{
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"pink",
            borderRadius:50,
            borderWidth:2,

          }
         
        }}
        
      >
        <Tab.Screen name="Transaction" component={TransactionScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}