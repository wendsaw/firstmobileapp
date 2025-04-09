

import React from 'react';
import { StyleSheet, View,Text, Image } from 'react-native';
import Logo from "../assets/images/logo_dark.png"

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img}/>
            <Text style={styles.title}>the number 1</Text>
            <Text style={{marginBottom:30, marginTop:10}}  > Reading List App</Text>

           
        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{

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

   
})

export default Home;
