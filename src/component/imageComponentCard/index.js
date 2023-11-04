import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get('window')
import arrow from "../../assets/arrow.png"
import responsiveFontSize from '../../config/font'
import comeraicon from "../../assets/comeraicon.png"
import crdim1 from "../../assets/crdim1.png"
import ika from "../../assets/ika.png"



export const ImageCard = ({main}) => {
  // console.log(height*0.071 , "==>");
 

  return (
   <>
   {main? <View style={styles.cardcontainer}>
      <View style={styles.imagviewLeft}>
      <View style={styles.leftimgcard}>
        <Image resizeMode="contain" style={{width:"100%",height:"100%"}}  source={ika}/>
      </View>
      </View>
      <View style={styles.imagview}>
       <View style={styles.imagecover}>
        <Image resizeMode="contain" style={{width:"100%",height:"100%"}} source={crdim1}/>
    
       </View>
      </View>
      <View style={styles.imagviewRight}>
      <View style={styles.rightimgcard}>
        <Image resizeMode="contain" style={{width:"100%",height:"100%"}}  source={ika}/>
      </View>
      </View>
    </View>: <View style={styles.cardcontainer}>
      <View style={styles.imagviewLeft}>
     
      </View>
      <View style={styles.imagview}>
      <View style={styles.image}>
        <Image resizeMode="contain" style={{width:"100%",height:"100%"}} source={comeraicon}/>
    
       </View>
      </View>
      <View style={styles.imagviewRight}>
      
      </View>
    </View>}
   </>
  )
}

const styles = StyleSheet.create({
  imagview: {
    width: width * 0.72,
    borderWidth: 1,
    height: height * 0.44,
    borderRadius: 15,
    // position: "absolute"
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center"


  },
  cardcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    display:"flex",
    // width:width,
    // height:height*0.07,
    top:height*0.071,
   
    
   
  },
  imagviewLeft: {
    width: width * 0.60,
    height: height * 0.37,
    borderWidth: 1,
    borderRadius: 15,
    position: "absolute",
    left: -(width * 0.12),
    transform:[{rotate:"-13 deg"}],
    bottom:height*0.01,
    zIndex:-1,
  },
  imagviewRight: {
    width: width * 0.60,
    height: height * 0.37,
    borderWidth: 1,
    borderRadius: 15,
    position: "absolute",
    left: width * 0.5,
    transform: [{ rotate: "10 deg" }],
    zIndex:-1,
    top:height*0.009,
  },
  image:{
    width:width*0.16,
    height:height*0.06,
  },
  imagecover:{
    width:width*0.9,
    height:height*0.47,
    overflow:"hidden"
  },
  leftimgcard:{
    width: width * 0.9,
    height: height * 0.5,
    transform: [{ rotate: "12 deg" }],
    left: -(width * 0.12),
    // top:height*0.009,
    bottom:height*0.08,
     overflow:"hidden"
  },
  rightimgcard:{
    width: width * 0.84,
    height: height * 0.5,
    transform: [{ rotate: "13  deg" }],
    bottom:height*0.07,
    overflow:"hidden",
    left: -(width * 0.12),
  }



})