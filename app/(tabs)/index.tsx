import { View, ActivityIndicator, StyleSheet, Text } from "react-native"

import SearchBar from "../../components/searchBar";
import WeatherCard from "../../components/weatherCard";
import { useWeather } from "../../hooks/useWeather";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native"
import { useTheme } from "../../contexts/ThemeContext";


export default function Home() {
    const { darkMode } = useTheme();

    const colors = {
        background: darkMode ? "#000000" : "#FFFFFF",
        backgroundHead: darkMode ? "#1e2022" : "#FFFFFF",

        card: darkMode ? "#373C40" : "#F5F5F5",

        text: darkMode ? "#EAE0CF" : "#000000",

        secondaryText: darkMode ? "#CFC6B8" : "#555555",

        input: darkMode ? "#FFFFFF" : "#EEEEEE",
        button: darkMode ? "#202224" : "#ffffff",
    };
    const { weather, loading, error, getWeather, clearWeather } = useWeather();
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: colors.background, height: "100%" }}>
                <View style={[styles.homecontainer, { backgroundColor: colors.backgroundHead }]}>
                    <Text style={[
                        styles.title,
                        {
                            color: colors.text,
                        },
                    ]}>Weather App</Text>
                </View>
                <View style={styles.container}>
                    <View style={[styles.searchbarcss, {
                        backgroundColor: colors.card,
                    },]}>
                        <SearchBar onSearch={getWeather} />
                    </View>
                    {weather && (
                        <TouchableOpacity
                            style={[styles.clearButton, { backgroundColor: colors.button }]}
                            onPress={clearWeather}
                        >
                            <Text style={[styles.clearText, {color:colors.text}]}>
                                Clear Results
                            </Text>
                        </TouchableOpacity>
                    )}
                    {loading && (
                        <ActivityIndicator size="large" style={{ top: 20 }} />
                    )}
                    {error ? (
                        <Text style={styles.error}>{error}</Text>
                    ) : null}
                    {weather && (
                        <WeatherCard data={weather} />
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchbarcss: {
        // backgroundColor:"#EAE0CF",
        height: "25%",
        width: "98%",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        // elevation:10,
        boxShadow: '0px 0px 100px 0px rgba(0, 0, 0, 0.12)'
    },
    homecontainer: {
        backgroundColor: "#1e2022",
        justifyContent: "center",
        padding: 20,
        elevation: 20

    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        // backgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        top: 5,


    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#EAE0CF",
    },
    error: {
        color: "red",
        marginTop: 20,
    },
    clearButton: {
        marginTop: 30,
        backgroundColor: "#373c40",
        borderRadius: 15,
        height: 50,
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        elevation:4,
        boxShadow: '0px 0px 100px 0px rgba(0, 0, 0, 0.18)',
    },

    clearText: {
        color: "#FFF",
        fontWeight: "600",
    },
});