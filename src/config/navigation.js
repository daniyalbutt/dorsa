
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screen/loginscreen';
import { MakeProfile } from '../screen/makeprofile';
import { Descriptio0nScreen } from '../screen/descriptionscreen';
import { SocialScreen } from '../screen/socialIconsscreen';
import { MainPage } from '../screen/mainpage';
MainPage
// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


export const Nav = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="login" component={LoginScreen} /> */}
      <Stack.Screen name="makeprofile" component={MakeProfile} />
      <Stack.Screen name="Descriptionscreen" component={Descriptio0nScreen} />
      <Stack.Screen name="socialscreen" component={SocialScreen} />
      <Stack.Screen name="main" component={MainPage} />

      

      
    </Stack.Navigator>
  </NavigationContainer>
  )
}


