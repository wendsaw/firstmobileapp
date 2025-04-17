
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemeText from '../../components/ThemeText';
const Login = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemeText title={true} style={styles.title}>
                login to your account
            </ThemeText>
            <Spacer height={100}/>
            <Link href='/register'>
            <ThemeText style={{textAlign:'center'}}>
                register instead
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

export default Login;
