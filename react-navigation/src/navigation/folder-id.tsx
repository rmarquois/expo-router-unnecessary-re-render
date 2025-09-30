import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabStack from "./tab";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator screenOptions={{
            header: () => (
                <View style={{ width: 120 }}>
                    <Button title="Back" onPress={() => navigation.goBack()} />
                </View>
            )
        }}>
            <Tab.Screen name="Summary" component={TabStack} />
            <Tab.Screen name="Finance" component={TabStack} />
        </Tab.Navigator>
    );
}
