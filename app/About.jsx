
import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import {Link} from 'expo-router'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About page </Text>
            <Link href='Index'>back home</Link>
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


},})

export default About;
