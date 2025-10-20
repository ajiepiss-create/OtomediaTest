import React from "react";
import { View,Text,Image } from "react-native";
import LogoSplash from './LogoSplash.jpg'


const SplashScreen = () => {

    return (
        <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
            <View style={{alignItems:'center',marginTop:250}}>
                <Image source={LogoSplash} style={{width:200,height:200,}}/>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:30,fontStyle:'italic',alignItems:'center',color:'#975de2ff'}}>Welcome App</Text>
            </View>
        </View>
    )
}


export default SplashScreen;