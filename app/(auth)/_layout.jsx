
import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { useUser } from "../../hooks/useUser"
import GuessOnly from "../../components/auth/GuessOnly";



export default function AuthLayout() {

  const {user}=useUser()
  console.log(user);
  

  return (
    <GuessOnly GuessOnly>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{ headerShown: false, animation: "none" }} 
      />

</GuessOnly>
    
  )
}



