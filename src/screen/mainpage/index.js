import React from 'react'
import { HeaderComponent } from '../../component/customeHeader'
import { Text, View, Image ,StyleSheet,Dimensions,TouchableOpacity } from "react-native"
const { width, height } = Dimensions.get('window')
import responsiveFontSize from '../../config/font'
import { ImageCard } from '../../component/imageComponentCard'
import { CustomButton } from '../../component/CustomButton'
import progrup from "../../assets/progrup.png"
import swip2 from "../../assets/swip2.png"
import user from "../../assets/user.png"
import aceIcon from "../../assets/ace-icon.png"
import cardsIcon from "../../assets/cards-icon.png"

export const MainPage = () => {
  return (
   <View style={styles.container}>
  <HeaderComponent cent={true}/>
  <ImageCard main={true}/>

  <View style={{marginTop:height*0.11,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <View  style={styles.imagemin}>
        <Image resizeMode='contain' source={progrup}/>
    </View>
    <View>
        <Text style={styles.swipp}>swipe down </Text>
        </View> 
    <View  style={[styles.imagemin,{marginLeft:width*0.03,}]}>
        <Image resizeMode='contain' source={swip2}/>
    </View>
  </View>
  <View style={{marginVertical:height*0.06,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
   
   <View>
    <Text style={styles.terexntext}> Trendy Cards</Text>
   </View>
   <TouchableOpacity style={styles.butt}>
    <Text style={{color:"#000"}}>
    Switch Show Affection Deck
    </Text>
   </TouchableOpacity>
   
  </View>

  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <TouchableOpacity>
       <View style={styles.user}>
       <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={user}/>
       </View>
    </TouchableOpacity>
    <TouchableOpacity>
       <View style={styles.user}>
       <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={aceIcon}/>
       </View>
    </TouchableOpacity>
    <TouchableOpacity>
       <View style={styles.user}>
       <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={cardsIcon}/>
       </View>
    </TouchableOpacity>
  </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.03,
        backgroundColor: "#fff"

    },
    imagemin:{
width:width*0.3,
    },
    butt:{
        borderWidth:1,
        padding:20,
        borderRadius:15
    },
    swipp:{
        fontSize: responsiveFontSize(20),
        fontWeight: "500",
        color: "#FF004D"
    },
    terexntext:{
        fontSize: responsiveFontSize(14),
        fontWeight: "500",
        color: "#222239"
    },
    user:{
   
        width:width*0.10,
        height:height*0.063, 
    }

})