import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from "../components/ThemedView"
import ThemeText from "../components/ThemeText"
import ThemeLogo from "../components/ThemeLogo"
import Spacer from "../components/Spacer"
import { Colors } from '../constants/Colors'

const Home = () => {

  return (
    <ThemedView style={styles.container}>
      <ThemeLogo />
      <Spacer />

      <ThemeText style={styles.title} title={true}>The Number 1</ThemeText>

      <ThemeText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemeText>

      <Link href="/login" style={styles.link}>
        <ThemeText>Login</ThemeText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemeText>Register</ThemeText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemeText>Profile</ThemeText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
})