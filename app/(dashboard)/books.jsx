import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemeText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"

const Books = () => {
  return (
    
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemeText title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>

    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})