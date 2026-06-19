import axios from "axios";

const API_KEY = "09c5d1651c7e406ebdd144601260306";

export const fetchWeather = async (city : string) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    return response.data;
}
