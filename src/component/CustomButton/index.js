import React from 'react'
import {Text,TouchableOpacity,StyleSheet,View,Dimensions} from "react-native"
import responsiveFontSize from '../../config/font'
const { width, height } = Dimensions.get('window')
export const CustomButton = ({onPress,title}) => {
  return (
    
<TouchableOpacity onPress={onPress} >
    <View style={styles.bView}>
    <Text style={styles.textcolor}>{title}</Text>
    </View>

</TouchableOpacity>
   
  )
}



const styles = StyleSheet.create({
    bView:{
        width:width*0.9,
        height:height*0.05,
        backgroundColor:"black",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    textcolor :{
        fontSize: responsiveFontSize(15),
        fontWeight:"500",
        color:"#fff"
    }
})
