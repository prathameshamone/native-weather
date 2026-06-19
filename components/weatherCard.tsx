import { View, Text } from "react-native";
import { weatherData } from "../types/weather";

interface Props {
  data: weatherData;
}

export default function WeatherCard({ data }: Props) {
  return (
    <View>
      <Text>{data.location.name}</Text>

      <Text>{data.current.temp_c}°C</Text>

      <Text>{data.current.condition.text}</Text>

      <Text>
        Humidity: {data.current.humidity}%
      </Text>

      <Text>
        Wind: {data.current.wind_kph} km/h
      </Text>
    </View>
  );
}