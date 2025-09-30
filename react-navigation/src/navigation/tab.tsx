import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";

const Stack = createNativeStackNavigator();

export default function Tab() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={View} />
        </Stack.Navigator>
    );
}

