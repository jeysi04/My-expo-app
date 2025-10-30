import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable} from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";


export default function Home() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    PlayfairDisplay: require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Profile card */}
        <View style={styles.card}>
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Description (with overlap) */}
        <View style={styles.desc}>
          <Text style={styles.textdesc}>Jaycee D. Cadag</Text>

          <View style={styles.textdesc2con}>
            <Text style={styles.textdesc2}>
              <Text style={styles.bold}>Birthday: </Text>November 25, 2004
            </Text>
            <Text style={styles.textdesc2}>
              <Text style={styles.bold}>Target Profession: </Text>Web Developer
            </Text>
            <Text style={styles.textdesc2}>
              <Text style={styles.bold}>Email: </Text>
              jdc2023-1951-81480@bicol-u.edu.ph
            </Text>
          </View>
        </View>
        <View style={styles.shadowdesc}>
        </View>

        <View>
           <Text style={[ 
            { fontSize: 26,
              color: "#000000ff",
              marginTop: 65,
              fontFamily: "PlayfairDisplay-Bold"
            }]}>Personal Works</Text>
        </View>

        <Pressable 
                    style={styles.works} 
                    onPress={() => {
                      router.push("/Rock-Paper-Scissors");
                    }}
                >
          <View style={styles.work1}>
                    <Text style={styles.workTitle}> Rock-Paper-Scissors </Text> 
          </View>
        </Pressable>
         <View style={styles.shadow}>
        </View>
        
        <View style={styles.works2}>
          <View style={styles.work1}>
            <Text style={styles.workTitle2}> Cloning a Youtube Page </Text>
          </View>
        </View>
        <View style={styles.shadow2}>
        </View>

        
        <View style={styles.works}>
          <View style={styles.work1}>
            <Text style={styles.workTitle}>Tribute Website</Text>
          </View>
        </View>
        <View style={styles.shadow}>
        </View>

        <View>
           <Text style={[ 
            { fontSize: 26,
              color: "#000000ff",
              marginTop: 65,
              fontFamily: "PlayfairDisplay-Bold"
            }]}>School Works</Text>
        </View>

        <View style={styles.works}>
          <View style={styles.work1}>
            <Text style={styles.workTitle}> Grand Palace </Text>
          </View>
        </View>
        <View style={styles.shadow}>
        </View>

        <View style={styles.works2}>
          <View style={styles.work1}>
            <Text style={styles.workTitle2}> Selc </Text>
          </View>
        </View>
        <View style={styles.shadow2}>
        </View>
        
        <View style={styles.works}>
          <View style={styles.work1}>
            <Text style={styles.workTitle}>Auto Care Inventory Director</Text>
          </View>
        </View>
        <View style={styles.shadow}>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
  },

  footer: {
    ...StyleSheet.absoluteFillObject, // fills the whole screen
  },

  scrollContent: {
    alignItems: "center",
    paddingTop: 38,
    paddingBottom: 100,
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
    zIndex: 2,
  },

  image: {
    width: 185,
    height: 169,
    borderRadius: 20,
    borderColor: "#000000ff",
    borderWidth: 1,
  },

  desc: {
    width: "98%",
    minHeight: 290,
    backgroundColor: "#000000ff",
    alignItems: "center",
    marginTop: -70, // overlap with card
    elevation: 10,
    zIndex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderRadius: 30, 
    shadowColor: "transparent",
  },

  textdesc: {
    marginTop: 80,
    fontSize: 24,
    color: "#ffffffff",
    fontFamily: "PlayfairDisplay-Bold",
    backgroundColor: "#000000ff"
  },

  textdesc2: {
    fontSize: 15,
    color: "#ffffffff",
    fontFamily: "Poppins",
    marginBottom: 5,
  },

  bold: {
    fontFamily: "Poppins-Bold",
  },

  textdesc2con: {
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#000000ff",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },

  extra: {
    marginTop: 20,
    width: "100%",
    gap: 10,
  },

  works: {
    width: "98%", // same width as desc
    height: 130,
    backgroundColor: "#ffffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    gap: 10,
    padding: 0,
    marginTop: 15,
    marginLeft: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000ff"
  },

  works2: {
    width: "100%", // same width as desc
    height: 130,
    backgroundColor: "#ffffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    gap: 10,
    padding: 0,
    marginTop: 15,
    marginRight: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000ff"
  },
    
  work1: {
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "flex-start",
    padding: 15,
    marginTop: 75,
  }, 

  workTitle: {
    fontSize: 17,
    fontFamily: "Poppins-Bold",
    color: "#000000ff",
  }, 

  workTitle2: {
    fontSize: 17,
    fontFamily: "Poppins-Bold",
    color: "#000000ff",
    marginLeft: 10
  }, 

  shadow: {
    backgroundColor: '#000000ff',
    marginTop: -125,
    height: 130,
    width: '98%',
    zIndex: -1,
    marginLeft: 29,
    borderRadius: 20,
    borderColor: "transparent",
  },

  shadow2: {
    backgroundColor: '#000000ff',
    marginTop: -125,
    height: 130,
    width: '98%',
    zIndex: -1,
    marginRight: 23,
    borderRadius: 20,
    borderColor: "transparent",
  },

  shadowdesc: {
    backgroundColor: '#000000ff',
    marginTop: -125,
    height: 130,
    width: '98%',
    zIndex: -1,
    borderRadius: 30,
    borderColor: "transparent",
  }
});
