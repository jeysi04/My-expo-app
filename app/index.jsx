import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>

      <View style={styles.card}>
        <Text> Hello, this is a card.</Text>
      </View>

      <Link href="/about" style={styles.link}>About Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0, 0, 0, 0.1)',
    },

    img: {
        marginVertical: 20
    },

    link: {
        marginVertical: 20,
        borderBottomWidth: 1
    }
})