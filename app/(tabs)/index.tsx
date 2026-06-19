import { View, ActivityIndicator, StyleSheet, Text } from "react-native"

import SearchBar from "../../components/searchBar";
import WeatherCard from "../../components/weatherCard";
import { useWeather } from "../../hooks/useWeather";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native"

export default function Home() {
    const { weather, loading, error, getWeather, clearWeather } = useWeather();
    return (
        <SafeAreaView style={{ flex: 2 }}>
            <View style={styles.homecontainer}>
                <Text style={styles.title}>Weather App</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.searchbarcss}>
                    <SearchBar onSearch={getWeather} />
                </View>
                {weather && (
                    <Button
                        title="Clear Results"
                        onPress={clearWeather}
                    />
                )}
                {loading && (
                    <ActivityIndicator size="large" />
                )}
                {error ? (
                    <Text style={styles.error}>{error}</Text>
                ) : null}
                {weather && (
                    <WeatherCard data={weather} />
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchbarcss:{
        backgroundColor:"#EAE0CF",
        height:"25%",
        width:"98%",
        borderRadius:10,
        padding:10,
        justifyContent:"center"
    },
    homecontainer: {
        backgroundColor: "#1a214f",
        justifyContent: "center",
        padding: 20,
        elevation: 20

    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: "#111844",
        justifyContent: "flex-start",
        alignItems: "center",


    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#EAE0CF",
    },
    error: {
        color: "red",
        marginTop: 10,
    },
});