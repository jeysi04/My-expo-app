import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
const router = useRouter();

export default function Home() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Background gradient */}
      <LinearGradient
        colors={["#8e2de2", "#ffffffff"]}
        style={styles.footer}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.95 }}
      />

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
          <Text style={styles.textdesc}>Olivia Rodrigo</Text>

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

        <View>
           <Text style={[styles.bold, 
            { fontSize: 24,
              color: "#ffffffff",
              marginTop: 65
            }]}>Works</Text>
        </View>

        <TouchableOpacity 
                    style={styles.works} 
                    onPress={() => {
                      router.push("/Rock-Paper-Scissors");
                    }}
                >
          <View style={styles.work1}>
                    <Text style={styles.workTitle}> Rock-Paper-Scissors </Text> 
          </View>
        </TouchableOpacity>
        
        <View style={styles.works}>
          <View style={styles.work1}>
            <Text style={styles.workTitle}>Work #2</Text>
          </View>
        </View>

        
        <View style={styles.works}>
          <View style={styles.work1}>
            <Text style={styles.workTitle}>Work #3</Text>
          </View>
        </View>

        
        <View style={styles.works}>
          <View style={styles.work1}>
            <Text style={styles.workTitle}>Work #4</Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28104e",
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
    borderColor: "#8e2de2",
    borderWidth: 1,
  },

  desc: {
    width: "97%",
    minHeight: 250,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    marginTop: -40, // overlap with card
    elevation: 10,
    zIndex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
    shadowColor: "#8e2de2",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },

  textdesc: {
    marginTop: 55,
    fontSize: 20,
    color: "#060606ff",
    fontFamily: "Poppins-Bold",
  },

  textdesc2: {
    fontSize: 15,
    color: "#060606ff",
    fontFamily: "Poppins",
    marginBottom: 5,
  },

  bold: {
    fontFamily: "Poppins-Bold",
  },

  textdesc2con: {
    width: "100%",
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
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
    width: "97%", // same width as desc
    height: 130,
    backgroundColor: "#fefefeff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    gap: 10,
    padding: 0,
    marginTop: 15,
    shadowColor: "#8e2de2",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 10, 
  },
    
  work1: {
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "flex-start",
    padding: 15,
    marginTop: 75,
  }, 

  workTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#060606ff",
  }
});
