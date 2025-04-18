


import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import {Colors} from '../constants/Colors'
const ThemeButton = ({style, ...props}) => {
    return (
        
    <Pressable


style={({pressed}) => [styles.btn, pressed && styles.pressed,style]}

{...props}
/>

 


        
    );
}

const styles = StyleSheet.create({

    btn:{

        backgroundColor:Colors.primary,
        padding:15,
        borderRadius:5,

    },
    pressed:{

        opacity:0.8,
    }
})

export default ThemeButton;
