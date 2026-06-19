import { View, Text, Button } from "react-native"
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import {StyleSheet} from "react-native"

interface Props {
    onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const [city, setCity] = useState("");
    return (
        <View style = {styles.searchbar}>
            <TextInput
                placeholder="Search City"
                value={city}
                onChangeText={setCity}
                style = {styles.input}
            />

            <Button
                title="Search"
                onPress={() => {
                    if (city.trim()) {
                        onSearch(city);
                        setCity("")
                    }else{
                        alert("Enter a valid City!!!")
                    }
                }} />
                
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:"white",
        borderRadius:10,
        height:50,
        bottom:8,
        paddingLeft:3,
    },
    searchbar:{
        gap:30,
        justifyContent:"center"
    }
})