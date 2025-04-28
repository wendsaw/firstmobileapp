
import { StyleSheet,Text } from 'react-native'
import { useUser } from '../../hooks/useUser'

import Spacer from "../../components/Spacer"
import ThemeText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import ThemeButton from '../../components/ThemeButton'


const Profile = () => {

  const {logout}=useUser()
  return (
    <ThemedView style={styles.container}>

      <ThemeText title={true} style={styles.heading}>
        Your Email
      </ThemeText>
      <Spacer />

      <ThemeText>Time to start reading some books...</ThemeText>
      <Spacer />

      <ThemeButton onPress={logout} >
         <Text style={{color:'#f2f2f2'}}>Logout
      
        </Text></ThemeButton> 
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})

