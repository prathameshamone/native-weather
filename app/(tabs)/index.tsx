import { View, ActivityIndicator, StyleSheet, Text } from "react-native"

import SearchBar from "../../components/searchBar";
import WeatherCard from "../../components/weatherCard";
import { useWeather } from "../../hooks/useWeather";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native"

export default function Home() {
    const { weather, loading, error, getWeather, clearWeather } = useWeather();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Weather App</Text>
                <SearchBar onSearch={getWeather} />
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
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    error: {
        color: "red",
        marginTop: 10,
    },
});