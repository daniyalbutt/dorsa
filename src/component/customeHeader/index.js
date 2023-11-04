import React from 'react'
import { Text, View, Image ,StyleSheet,Dimensions,TouchableOpacity } from "react-native"
const { width, height } = Dimensions.get('window')
import arrow from "../../assets/arrow.png"
import responsiveFontSize from '../../config/font'
import { useNavigation } from '@react-navigation/native';
export const HeaderComponent = ({cent}) => {
    const navigation = useNavigation();
    return (
        <>
        {cent ?<View style={styles.headcontainer1}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={arrow} />
      </TouchableOpacity>
               <Text style={styles.texthed2}> Orcard Today's hand!</Text>
            </View>
     :<View style={styles.headcontainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={arrow} />
      </TouchableOpacity>
            <View style={styles.textcontainer}>
            <Text style={styles.texthed}>Hi there!</Text>
               <Text style={styles.texthed}> Lets Get Shuffled</Text>
            </View>
        </View>

        }
        </>
    )
}

const styles = StyleSheet.create({
    headcontainer:{
        flexDirection:"row",
        alignItems:"center",
        
    },
    headcontainer1:{
        alignItems:"center",
        flexDirection:"row",
    },
    textcontainer:{
        // backgroundColor:"red",
width:width*0.7,
marginHorizontal:width*0.05,
justifyContent:"center",
alignItems:"center"

    },
    texthed:{
  fontSize: responsiveFontSize(15),
  fontWeight:"500",
  color:"#000"
    },
    texthed2:{
        fontSize: responsiveFontSize(20),
        fontWeight:"900",
        color:"#000",
        marginHorizontal:width*0.16
    }
   
})