
import React from 'react';
import { StyleSheet } from 'react-native';
import {Link} from 'expo-router'
import ThemedView from '../components/ThemedView';
import ThemeText from '../components/ThemeText';

const Contact = () => {
    return (
        <ThemedView style={[styles.container]}>
            <ThemeText style={styles.title}>contact page </ThemeText>
            <Link href="/" style={styles.link}>
           <ThemeText>back home</ThemeText> 
            </Link>

        </ThemedView>
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

export default Contact;
