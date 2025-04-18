




import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemeLogo from '../components/ThemeLogo';
import Spacer from '../components/Spacer';
import ThemeText from '../components/ThemeText';


const Home= () => {

    return (

        <ThemedView style={styles.container}>
            
            <ThemeLogo />
            <Spacer height={20}/>
            <ThemeText style={styles.title} title={true}>
                the number 1
            </ThemeText>

            <Spacer height={10}/>
            <ThemeText > Reading List App</ThemeText>
            <Spacer/>

            <Link href="/login" style={styles.link}>
             <ThemeText>login</ThemeText>
            </Link>
            <Link href="/register" style={styles.link}>
             <ThemeText>register page</ThemeText>
            </Link>

        </ThemedView>
       
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

    
    link:{

        marginVertical:10,
        borderBottomWidth:1
    }

    
})

export default Home;