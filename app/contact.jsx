
import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import {Link} from 'expo-router'

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact us </Text>
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

export default Contact;
