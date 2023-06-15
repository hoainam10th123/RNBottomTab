import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

export default function Settings() {
    const navigation = useNavigation<any>()
    return (
        <>
            <TouchableOpacity onPress={()=>navigation.navigate('Other')}>
                <Text style={{fontSize: 50}}>Setting screen</Text>
            </TouchableOpacity>
        </>
    )
}