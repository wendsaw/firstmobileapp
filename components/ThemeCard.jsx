

import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';

const ThemeCard = ({style, ...props}) => {

    const colorScheme=useColorScheme()
    const theme=Colors[colorScheme]?? Colors.light

    return (

     
          <View  style={[{backgroundColor:theme.uiBackground},style.card,style]}
                      {...props} 
                      />
    );
}

const styles = StyleSheet.create({

    card:{

        borderRadius:5,
        padding:20,

    }
})

export default ThemeCard;
