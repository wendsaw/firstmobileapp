import { Pressable, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import ThemeButton from '../../components/ThemeButton'

const Login = () => {

  const handleSubmit = async () => {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Login to Your Account
      </ThemeText>

      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemeButton>

      <Spacer height={100} />
      <Link href="/register" replace>
        <ThemeText style={{ textAlign: "center" }}>
          Register instead
        </ThemeText>
      </Link>

    </ThemedView>
  )
}

export default Login

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
  }
})