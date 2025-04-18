



import React from 'react';
import { StyleSheet, Pressable, Text} from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemeText from '../../components/ThemeText';
import{Colors}from'../../constants/Colors'
import ThemeButton from '../../components/ThemeButton';



const Login = () => {

    const handleSubmit=()=>{

        console.log('login form submitted');
        
    }

        return (
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemeText title={true} style={styles.title}>
                login to your account
            </ThemeText>

            <ThemeButton onPressed={handleSubmit} >
                <Text style={{color:'#f2f2f2'}}>Login</Text>
                
            </ThemeButton>
           
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
        alignItems:'center'
    },
    title:{

        textAlign:'center',
        fontSize:18,
        marginBottom:30,

    },


   



})

export default Login;
