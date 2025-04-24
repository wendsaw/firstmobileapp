
import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import ThemeButton from '../../components/ThemeButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'

const Register = () => {

  const [email ,SetEmail]=useState('')
  const [password ,SetPassword]=useState('')


  const handleSubmit = async () => {
    console.log('register form submitted', email,password)
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Register an Account
      </ThemeText>

      <ThemedTextInput  
      placeholder='Email'
      keyboardType='email-address'
      onChangeText={SetEmail}
      value={email}

      style={{width:'80%', marginBottom:20}}
      
      />
      <ThemedTextInput  
      placeholder='Password'
      onChangeText={SetPassword}
      value={password}
      secureTextEntry

      style={{width:'80%', marginBottom:20}}
      
      />

      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemeButton>

      <Spacer height={100} />
      <Link href="/login" replace>
        <ThemeText style={{ textAlign: "center" }}>
          Login instead
        </ThemeText>
      </Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  )

 
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
})
