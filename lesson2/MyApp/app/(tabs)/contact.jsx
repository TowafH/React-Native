import {View, Text, StyleSheet, Pressable} from 'react-native'
import {Link} from 'expo-router'
function contact() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Contact Us!</Text>
      <Link href="/" style={{marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
      </Link>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 6
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4
  }
})