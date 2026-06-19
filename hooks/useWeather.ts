import { useState } from "react";
import { fetchWeather } from "../services/weatherApi"
import { weatherData } from "../types/weather"

export const useWeather = () => {
    const [weather, setWeather] = useState<weatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const clearWeather = () => {
        setWeather(null);
        setError("")
    }

    const getWeather = async (city: string) => {

        try {
            setLoading(true);
            setError("");

            const data = await fetchWeather(city);
            console.log("Weather Data:", JSON.stringify(data, null, 2));
            setWeather(data);
        } catch {
            setError("City Not Found!!!")
        } finally {
            setLoading(false);
        }
    }
    return {
        weather,
        loading,
        error,
        getWeather,
        clearWeather,
    }

}