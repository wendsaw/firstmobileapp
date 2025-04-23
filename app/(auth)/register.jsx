
import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import ThemeButton from '../../components/ThemeButton'

const Register = () => {

  const handleSubmit = async () => {
    console.log('register form submitted')
  }

  return (
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Register an Account
      </ThemeText>

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
