

import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>the number 1</Text>
            <Text> Reading List App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{

        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
})

export default Home;
