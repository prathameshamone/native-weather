import { View, Text, StyleSheet } from "react-native";
import { weatherData } from "../types/weather";
import { useTheme } from "../contexts/ThemeContext";


interface Props {
  data: weatherData;
}

export default function WeatherCard({ data }: Props) {
  const { darkMode } = useTheme();
  const colors = {
    background: darkMode ? "#000000" : "#FFFFFF",
    backgroundHead: darkMode ? "#1e2022" : "#FFFFFF",

    card: darkMode ? "#373C40" : "#ffffff",

    text: darkMode ? "#EAE0CF" : "#000000",

    secondaryText: darkMode ? "#CFC6B8" : "#555555",

    input: darkMode ? "#FFFFFF" : "#EEEEEE",
    button: darkMode ? "#202224" : "#ffffff",
  };
  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.city, { color: colors.text }]}>
        {data.location.name}
      </Text>

      <Text style={[styles.temp, { color: colors.text }]}>
        {data.current.temp_c}°
      </Text>

      <Text style={[styles.condition, { color: colors.text }]}>
        {data.current.condition.text}
      </Text>

      <Text style={[styles.info, { color: colors.text }]}>
        Humidity: {data.current.humidity}%
      </Text>

      <Text style={[styles.info, { color: colors.text }]}>
        Wind: {data.current.wind_kph} km/h
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e2022",
    padding: 24,
    width: "100%",
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    boxShadow: '0px 0px 100px 0px rgba(0, 0, 0, 0.12)'

  },
  city: {
    color: "#EAE0CF",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },

  temp: {
    color: "#EAE0CF",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  condition: {
    color: "#EAE0CF",
    textAlign: "center",
    fontSize: 18,
    // color: "#64748B",
    marginBottom: 20,
  },

  info: {
    color: "#EAE0CF",
    fontSize: 16,
    marginVertical: 2,
  },
})