import React from 'react'
import { HeaderComponent } from '../../component/customeHeader'
import { Text, View, Image ,StyleSheet,Dimensions,TextInput } from "react-native"
const { width, height } = Dimensions.get('window')
import responsiveFontSize from '../../config/font'
import { ImageCard } from '../../component/imageComponentCard'
import { CustomButton } from '../../component/CustomButton'

export const Descriptio0nScreen = ({navigation}) => {
  return (
 <View style={styles.container}>
<HeaderComponent/>
<View style={{marginTop:height*0.2, height:height*0.5,justifyContent:"space-around"}}>
<View>
    <Text style={styles.text}>Type Your Name And Age</Text>
</View>
<View style={{borderBottomWidth:1,borderBottomColor:"#707070"}}> 
<TextInput 
                placeholder="I am leyla 22 engineer"
                placeholderTextColor={"grey"}
                placeholderTextSize={30}
                style={styles.inp}
              />
</View>
</View>
<View style={{marginVertical:height*0.11}}>
<CustomButton title={"Next"} on onPress={()=>{navigation.navigate("socialscreen")}}/>
</View>
 </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:width*0.04,
        paddingVertical:height*0.03,
        backgroundColor:"#fff"

    },
    text:{
        fontSize: responsiveFontSize(15),
        fontWeight:"500",
        color:"#000"
    }


})