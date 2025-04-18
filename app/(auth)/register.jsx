

import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemeText from '../../components/ThemeText';
import ThemeButton from '../../components/ThemeButton';

const Register = () => {

    const handleSubmit=()=>{

        console.log('register form submitted');
        
    }


    return (
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemeText title={true} style={styles.title}>
                register for an account 
            </ThemeText>
            <ThemeButton onPressed={handleSubmit} >
                <Text style={{color:'#f2f2f2'}}>Register</Text>
                
            </ThemeButton>
            <Spacer height={100}/>
            <Link href='/login'>
            <ThemeText style={{textAlign:'center'}}>
                login
            </ThemeText>
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{

        textAlign:'center',
        fontSize:18,
        marginBottom:30,
    

    },


})

export default Register;
