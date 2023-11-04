import React from 'react'
import { HeaderComponent } from '../../component/customeHeader'
import { Text, View, Image, StyleSheet, Dimensions, TextInput } from "react-native"
const { width, height } = Dimensions.get('window')
import responsiveFontSize from '../../config/font'
import { ImageCard } from '../../component/imageComponentCard'
import { CustomButton } from '../../component/CustomButton'
import instagram from "../../assets/instagram.png"
import tiktik from "../../assets/tiktik.png"
import youtube from "../../assets/youtube.png"
import snap from "../../assets/snap.png"
import facebook from "../../assets/facebook.png"
import twiter from "../../assets/twiter.png"

export const SocialScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComponent />
            <View style={{ marginTop: height * 0.2,paddingHorizontal:width*0.03, }}>
                <View>
                    <Text style={styles.text}>Add Social media </Text>
                </View>
                <View  >
                   <View style={{flexDirection:"row", justifyContent:"space-between",marginVertical:height*0.05,}}>
                   <View style={styles.iconimage} >
                        <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={instagram} />
                    </View>
                    <View style={styles.iconimage} >
                        <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={tiktik} />
                    </View>
                    <View style={styles.iconimage} >
                        
                        <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={facebook} />
                    </View>
                   </View>
                   <View  style={{flexDirection:"row", justifyContent:"space-between"}}>
                   <View style={styles.iconimage} >
                    <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={snap} />
                    </View>
                    <View style={styles.iconimage} >
                        <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={twiter} />
                    </View>
                    <View style={styles.iconimage} >
                        <Image resizeMode='contain' style={{ width: "100%", height: "100%" }} source={youtube} />
                    </View>
                   </View>
                </View>
            </View>
            <View style={{ marginVertical: height * 0.3 }}>
                <CustomButton title={"Next"} onPress={()=>{navigation.navigate("main")}} />
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
    text: {
        fontSize: responsiveFontSize(15),
        fontWeight: "500",
        color: "#000"
    },
    iconimage: {
        width: width * 0.2,
        height: height * 0.09,
        // marginVertical:height*0.03,
        // marginRight:width*0.0
       

    }


})