import { View, Text, Button } from "react-native"
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

interface Props {
    onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const [city, setCity] = useState("");
    return (
        <View>
            <TextInput
                placeholder="Search City"
                value={city}
                onChangeText={setCity}
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