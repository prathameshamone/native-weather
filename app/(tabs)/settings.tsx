import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from "../../contexts/ThemeContext";

const settings = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <SafeAreaView>
      <View style = {{backgroundColor: darkMode
      ? "#000000"
      : "#FFFFFF",height:"100%"}}>
        <Text style={styles.headingtxt}>Settings</Text>
        <View style={styles.pfpcard}>
          <Image source={require('../../assets/images/pic.jpeg')}
            style={styles.pfpImage} />
          <View style={styles.pfptext}>
            <Text style={styles.pfp1Text}>
              Prathamesh Amone
            </Text>
            <Text style={styles.pfp2Text}>
              Native Dev
            </Text>
          </View>
        </View>
        <View style={styles.appearance}>
          <Text style={styles.appText}>Appearance</Text>
          <TouchableOpacity
            style={styles.option}
            onPress={() => !darkMode && toggleTheme()}
          >
            <View style={styles.radioOuter}>
              {darkMode && <View style={styles.radioInner} />}
            </View>

            <Text style={styles.text}>
              Dark Mode
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => darkMode && toggleTheme()}
          >
            <View style={styles.radioOuter}>
              {!darkMode && <View style={styles.radioInner} />}
            </View>

            <Text style={styles.text}>
              Light Mode
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default settings

const styles = StyleSheet.create({
  appText: {
    color: "#EAE0CF",
    fontSize: 15,
    fontWeight: "500",
    bottom: 5,
  },
  appearance: {
    backgroundColor: "#1e2022",
    top: 40,
    width: "90%",
    left: 20,
    padding: 24,
    borderRadius: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#EAE0CF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#EAE0CF",
  },

  text: {
    color: "#EAE0CF",
    fontSize: 18,
  },
  pfptext: {
    bottom: 63,
  },
  pfp1Text: {
    color: "#EAE0CF",
    left: 100,
    bottom: 0,
    top: 0,
    fontSize: 20,
    fontWeight: "700",
  },
  pfp2Text: {
    color: "#EAE0CF",
    left: 100,
    bottom: 0,
    top: 0,
    fontSize: 15,
    fontWeight: "500",
  },
  pfpImage: {
    height: 75,
    width: 75,
    elevation: 10,
    borderRadius: 50,
  },
  pfpcard: {
    backgroundColor: "#1e2022",
    top: 20,
    padding: 24,
    width: "90%",
    left: 20,
    borderRadius: 12,
    height: 125,

  },
  headingtxt: {
    color: "#EAE0CF",
    fontWeight: "700",
    fontSize: 25,
    backgroundColor: "#1e2022",
    padding: 24,
  },
  owncard: {
    backgroundColor: "#1e2022",
    top: 20,
    padding: 24,
    width: "90%",
    left: 20,
    borderRadius: 12,
    height: 125,

  },
})