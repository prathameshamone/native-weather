import { View, Text, Button, TouchableOpacity } from "react-native"
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native"
import { useTheme } from "../contexts/ThemeContext";


interface Props {
    onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const { darkMode } = useTheme();
    const colors = {
        card: darkMode ? "#373C40" : "#F5F5F5",
        text: darkMode ? "#EAE0CF" : "#000000",
        button: darkMode ? "#202224" : "#ffffff"
    };
    const [city, setCity] = useState("");
    return (
        <View style={[
            styles.card,
            {
                backgroundColor: colors.card,
            },
        ]}>
            <View style={styles.searchbar}>
                <View style={styles.heading}>
                    <Text style={[
                        styles.city,
                        {
                            color: colors.text,
                        },
                    ]}>Search your city now!!</Text>
                </View>
                <TextInput
                    placeholder="Search City"
                    value={city}
                    onChangeText={setCity}
                    style={styles.input}
                />

                <TouchableOpacity style={[styles.button, { backgroundColor: colors.button }]}
                    onPress={() => {
                        if (city.trim()) {
                            onSearch(city);
                            setCity("")
                        } else {
                            alert("Enter a valid City!!!")
                        }
                    }}>
                    <Text style={[styles.text, { color: colors.text }]}>Search</Text>
                </TouchableOpacity>

                {/* <Button
                title="Search"
                onPress={() => {
                    if (city.trim()) {
                        onSearch(city);
                        setCity("")
                    }else{
                        alert("Enter a valid City!!!")
                    }
                }} /> */}

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight:"700",
    },
    heading: {
        bottom: 10,
    },
    city: {
        color: "#EAE0CF",
        fontWeight: "700"
    },
    input: {
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
        bottom: 8,
        paddingLeft: 20,
        boxShadow: '0px 0px 100px 0px rgba(0, 0, 0, 0.12)'

    },
    searchbar: {
        gap: 10,
        justifyContent: "center",

    },
    button: {
        backgroundColor: "#373c40",
        width: "50%",
        left: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        padding: 10,
        boxShadow: '0px 0px 100px 0px rgba(0, 0, 0, 0.12)'

    },
    card: {
        backgroundColor: "#1e2022",
        padding: 20,
        height: 180,
        borderRadius: 12,
        elevation: 10,
        width: "110%",
        right: 20

    }
})

