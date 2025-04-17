

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemeText from '../../components/ThemeText';
const Register = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemeText title={true} style={styles.title}>
                register for an account 
            </ThemeText>
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
    },
    title:{

        textAlign:'center',
        fontSize:18,
        marginBottom:30,
    

    },


})

export default Register;
