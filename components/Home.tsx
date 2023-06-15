import { Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OneScreen from "./OneScreen";
import SecondsScreen from "./SecondsScreen";

const Tab = createMaterialTopTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="OneScreen" component={OneScreen} />
            <Tab.Screen name="SecondsScreen" component={SecondsScreen} />
        </Tab.Navigator>
    )
}