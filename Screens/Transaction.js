import React,{Component} from  'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

import * as Permissions from "expo-permissions";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { isAsyncDebugging } from 'react-native/Libraries/Utilities/DebugEnvironment';
import db from "../config"
export default class TransactionScreen extends Component {
    constructor(props){
       super(props)
       this.state={
        bookId:"",
        studentId:"",
           domState:"normal",
           hasCameraPermissions:null,
           scanned:false,
           scannedData:"",
           

       }
    }
    getCameraPermissions=async domState=>{
        const {status} =await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
             hasCameraPermissions:status==="granted",
             domState:domState,
             scanned:false,
    
        })
    
    }
    handleBarCodeScanned=async ({type,data})=>{
    this.setState({
         scannedData:data,
         domState:"normal",
         scanned:"true",
       
    })
    }
    handleTransaction=()=>{
        var {bookId}=this.state;
        db.collection("books").doc(bookId).get().then(doc=>{console.log(doc.data())})
    }
    render(){
        const {domState,hasCameraPermissions,scanned,scannedData}=this.state
        if(domState==="scanner")
        {
        return <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}/>
        }
        return(
            <View style={styles.container}>
      <Text>{hasCameraPermissions?scannedData:"requestCameraPermission"}</Text>

      <TextInput style={styles.textInput} placeholder={"Book Id"} placeholderTextColor={"white"}value={bookId} />
      <TouchableOpacity>
          <Text>Scan</Text>
      </TouchableOpacity>

      <TextInput style={styles.textInput} placeholder={"Student Id"} placeholderTextColor={"white"}value={studentId} />
      <TouchableOpacity>
          <Text>Scan</Text>
      </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button} 
                onPress={()=>this.getCameraPermissions("scanner")}>
                    <Text style={styles.text}>Scan QR Code </Text>
                
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleTransaction}>
                    <Text>Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#5653D4"
    },
    text:{
    color:"#ffff",
    fontSize:30
    },
    button:{
        color:"#654865",
        backgroundColor:"black",
        justifyContent:"center",
        borderRadius:10,
        alignItems:"center"

    },
    text:{
        color:"#565555",
        fontSize:20,
  

    },
    textInput:{
        width:"100%",
        height:100,
        padding:20,
        borderColor:"black",
        borderRadius:20,

    },
})