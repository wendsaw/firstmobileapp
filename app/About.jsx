
import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import {Link} from 'expo-router'
import{Colors}from'../constants/Colors'
import { useColorScheme } from 'react-native';

const About = () => {
    const colorScheme=useColorScheme()
    
        const theme=Colors[colorScheme]?? Colors.light


    return (


        <View style={[styles.container, {backgroundColor:theme.background}]}>
            <Text style={styles.title}>About page </Text>
            <Link href="/" style={styles.link}>back home</Link>

        </View>
    );
}

const styles = StyleSheet.create({ container:{

    flex:1,
    alignItems:'center',
    justifyContent:'center'

},
title:{

    fontWeight:"bold",
    fontSize:18

},

img:{

    marginVertical:20


},
link:{

    marginVertical:10,
    borderBottomWidth:1
}

})

export default About;
