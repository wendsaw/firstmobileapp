

import React from 'react';
import { StyleSheet, View, Text, useColorScheme, StatusBar } from 'react-native';
import{Colors}from'../constants/Colors'
import { Stack } from "expo-router";

import  {UserProvider}  from '../contexts/UserContext';


const RootLayout = () => {

    const colorScheme=useColorScheme()


    const theme=Colors[colorScheme]?? Colors.light
    

    return (

    <UserProvider>
       <StatusBar value="auto" />
     <Stack screenOptions={{

        headerStyle:{backgroundColor:theme.navBackground},
        headerTintColor:theme.title,
     }}>
      <Stack.Screen name='(auth)' options={{headerShown:false}}/>
      <Stack.Screen name='(dashboard)' options={{headerShown:false}}/>
       <Stack.Screen name='index' options={{title:'Home'}}/>
       <Stack.Screen name='about' options={{title:'About'}}/>
       <Stack.Screen name='contact' options={{title:'Contact'}}/>

     </Stack>

     </UserProvider>
            
        
    );  
}

const styles = StyleSheet.create({})

export default RootLayout;
