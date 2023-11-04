import React from 'react'
import { HeaderComponent } from '../../component/customeHeader'
import { Text, View, Image ,StyleSheet,Dimensions } from "react-native"
const { width, height } = Dimensions.get('window')
import responsiveFontSize from '../../config/font'
import { ImageCard } from '../../component/imageComponentCard'
import { CustomButton } from '../../component/CustomButton'

export const MakeProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <HeaderComponent/>
        <ImageCard />
      <View style={{flex:1,justifyContent:"flex-end"}}>

        <CustomButton  onPress={()=>{navigation.navigate("Descriptionscreen")}} title={"Next"}/>
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

    }


})