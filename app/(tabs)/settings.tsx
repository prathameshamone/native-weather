import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from "../../contexts/ThemeContext";
import {Linking} from "react-native";
import { Link } from '@react-navigation/native';

const settings = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [card, showcard] = useState(false);

  const handleCard = () => {
    showcard(true);
  }
  const rehandlecard = () => {
    showcard(false);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ position: "relative", flex: 1 }}>
        <View style={{
          backgroundColor: darkMode
            ? "#000000"
            : "#FFFFFF", height: "100%"
        }}>
          <View style={[[styles.headingView, {
            backgroundColor: darkMode
              ? "#1e2022"
              : "#FFFFFF"
          }]]}>
            <Text style={[styles.headingtxt, { color: darkMode ? "#EAE0CF" : "#000000" }]}>Settings</Text>
          </View>
          <View style={[styles.pfpcard, {
            backgroundColor: darkMode
              ? "#1e2022"
              : "#FFFFFF"
          }]}>
            <TouchableOpacity onPress={handleCard}>
              <Image source={require('../../assets/images/pic.jpeg')}
                style={styles.pfpImage} />
            </TouchableOpacity>
            <View style={[styles.pfptext]}>
              <Text style={[styles.pfp1Text, { color: darkMode ? "#EAE0CF" : "#000000" }]}>
                Prathamesh Amone
              </Text>
              <Text style={[styles.pfp2Text, { color: darkMode ? "#EAE0CF" : "#000000" }]}>
                Native Dev
              </Text>
            </View>
          </View>
          <View style={[styles.appearance, {
            backgroundColor: darkMode
              ? "#1e2022"
              : "#FFFFFF"
          }]}>
            <Text style={[styles.appText, { color: darkMode ? "#EAE0CF" : "#000000" }]}>Appearance</Text>
            <TouchableOpacity
              style={styles.option}
              onPress={() => !darkMode && toggleTheme()}
            >
              <View style={[styles.radioOuter, { borderColor: darkMode ? "#EAE0CF" : "#000000" }]}>
                {darkMode && <View style={[styles.radioInner, { backgroundColor: darkMode ? "#EAE0CF" : "#000000" }]} />}
              </View>

              <Text style={[styles.text, { color: darkMode ? "#EAE0CF" : "#000000" }]}>
                Dark Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => darkMode && toggleTheme()}
            >
              <View style={[styles.radioOuter, { borderColor: darkMode ? "#EAE0CF" : "#000000" }]}>
                {!darkMode && <View style={[styles.radioInner, { backgroundColor: darkMode ? "#EAE0CF" : "#000000" }]} />}
              </View>

              <Text style={[styles.text, { color: darkMode ? "#EAE0CF" : "#000000" }]}>
                Light Mode
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.aboutus, {
            backgroundColor: darkMode
              ? "#1e2022"
              : "#FFFFFF"
          }, { borderColor: darkMode ? "#EAE0CF" : "#000000" }]}>
            <Text style={[styles.aboutusText, { color: darkMode ? "#EAE0CF" : "#000000" }]}>About us</Text>
            <View style={[styles.aboutus1, {
              backgroundColor: darkMode
                ? "#373a3d"
                : "#FFFFFF"
            }, {}]}>
              <TouchableOpacity onPress={() => {Linking.openURL('mailto:prathameshamone07@gmail.com')}}> 
                <Text style={[{ color: darkMode ? "#EAE0CF" : "#000" }, styles.tabtext]}>Email : prathameshamone07@gmail.com</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.aboutus1, {
              backgroundColor: darkMode
                ? "#373a3d"
                : "#FFFFFF"
            }, {}]}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://github.com/prathameshamone')}}>
                <Text style={[{ color: darkMode ? "#EAE0CF" : "#000" }, styles.tabtext]}>Github : github.com/prathameshamone</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.aboutus1, {
              backgroundColor: darkMode
                ? "#373a3d"
                : "#FFFFFF"
            }, {}]}>
              <TouchableOpacity onPress={() => {Linking.openURL('tel:8261876508')}}>
                <Text style={[{ color: darkMode ? "#EAE0CF" : "#000" }, styles.tabtext]}>Contact : 8261876508</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.aboutus1, {
              backgroundColor: darkMode
                ? "#373a3d"
                : "#FFFFFF"
            }, {}]}>
              <TouchableOpacity onPress={() => {Linking.openURL('https://www.linkedin.com/in/prathamesh-amone-835606413')}}>
                <Text style={[{ color: darkMode ? "#EAE0CF" : "#000" }, styles.tabtext]}>LinkedIn : Prathamesh Amone</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {
          card && (
              <Pressable onPress={rehandlecard} style={styles.hugeImage}>
                <Image source={require('../../assets/images/pic.jpeg')}
                  style={styles.pfpImageHuge} />
              </Pressable>
          )
        }
      </View>

    </SafeAreaView>
  )
}

export default settings

const styles = StyleSheet.create({
  pfpImageHuge: {
    height: 300,
    width: 320,
    elevation: 10,
    borderRadius: 0,
    // backgroundColor: "black"
  },
  hugeImage: {
    position: "absolute",
    backgroundColor: "#000000",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999, 

  },
  tabtext: {
    fontFamily: "Poppins_700Bold",
    left: 15,
  },
  aboutus1: { // small cards inside about us
    // top: 50,
    width: 330,
    height: 50,
    left: 13,
    borderRadius: 12,
    elevation: 10,
    justifyContent: "center",
    marginTop:10,
  },
  aboutus: { //main about us card
    marginTop: 15,
    width: "90%",
    // height: 300,
    left: 20,
    // padding: 24,
    borderRadius: 12,
    elevation: 10,
    paddingBottom: 20,
  },
  aboutusText: {
    fontFamily: "Poppins_700Bold",
    left: 20,
    top:5,
    marginTop: 5,
    fontSize: 18,
    marginBottom: 5,
  },
  appText: {
    color: "#EAE0CF",
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    bottom: 5,
  },
  appearance: {
    backgroundColor: "#1e2022",
    marginTop: 15,
    width: "90%",
    left: 20,
    padding: 24,
    borderRadius: 12,
    elevation: 10,

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
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
  },
  pfptext: {
    bottom: 65,
  },
  pfp1Text: {
    color: "#EAE0CF",
    left: 100,
    bottom: 0,
    top: 0,
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
  },
  pfp2Text: {
    color: "#EAE0CF",
    left: 100,
    bottom: 0,
    top: 0,
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
  },
  pfpImage: {
    height: 75,
    width: 75,
    elevation: 10,
    borderRadius: 50,

  },
  pfpcard: {
    backgroundColor: "#1e2022",
    marginTop: 15,
    padding: 24,
    width: "90%",
    left: 20,
    borderRadius: 12,
    height: 125,
    elevation: 10,

  },
  headingtxt: {
    color: "#EAE0CF",
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
  },
  headingView: {
    backgroundColor: "#1e2022",
    padding: 20,
    elevation: 5,
  },
  owncard: {
    backgroundColor: "#1e2022",
    marginTop: 10,
    padding: 24,
    width: "90%",
    left: 20,
    borderRadius: 12,
    height: 125,

  },
})