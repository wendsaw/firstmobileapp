
import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import ThemeButton from '../../components/ThemeButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import {useUser} from '../../hooks/useUser'

const Register = () => {

  const [email ,SetEmail]=useState('')
  const [password ,SetPassword]=useState('')
  const [error, setError]=useState(null)

  const { user,register}=useUser()

  const handleSubmit = async () => {
    setError(null)

    try {

      
      await register(email,password)
     
     
      
    } catch (error) {
      setError(error.message)
      
    }
    
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

      <Spacer/>
      {error && <Text style={styles.error}>{error}</Text> }


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

  error:{

    color:Colors.warning,
    padding:10,
    backgroundColor:'#f5c1c8',
    borderColor:Colors.warning,
    borderWidth:1,
    borderRadius:6,
    marginHorizontal:10,



  }
})
