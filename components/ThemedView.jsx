import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import{Colors}from'../constants/Colors'


const ThemedView = ({style, ...props}) => {

    const colorScheme=useColorScheme()
    
    
    const theme= Colors[colorScheme] ?? Colors.light

    return (
       <View  style={[{backgroundColor:theme.background},style]}
            {...props} 
            />
       
    );
}

const styles = StyleSheet.create({})

export default ThemedView;
