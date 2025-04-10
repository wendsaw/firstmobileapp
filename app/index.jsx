

import React from 'react';
import { StyleSheet, View,Text, Image } from 'react-native';
import Logo from "../assets/images/logo_dark.png"
import { Link } from 'expo-router';



const Home= () => {

    return (

        <View style={styles.container}>
            
            <Image source={Logo} style={styles.img}/>
            <Text style={styles.title}>the number 1</Text>
            <Text style={{marginBottom:30, marginTop:10}}  > Reading List App</Text>
            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>

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

    link:{

        marginVertical:10,
        borderBottomWidth:1
    }

    // card:{
    //     backgroundColor:"#eee",
    //     padding:20,
    //     borderRadius:5,
    //     boxShadow:'4px 4px rgba(0,0,0,0.1)'



    // },
})

export default Home;
