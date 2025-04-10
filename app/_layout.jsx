

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        
     <Stack screenOptions={{

        headerStyle:{backgroundColor:'#ddd'},
        headerTintColor:'#333',
     }}>
       <Stack.Screen name='index' options={{title:'Home'}}/>
       <Stack.Screen name='about' options={{title:'About'}}/>
       <Stack.Screen name='contact' options={{title:'Contact', headerShown:false}}/>

     </Stack>
            
        
    );  
}

const styles = StyleSheet.create({})

export default RootLayout;
