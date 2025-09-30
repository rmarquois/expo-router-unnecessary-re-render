import { router, Tabs } from 'expo-router'
import { View, Button } from "react-native"

export default function TabLayout() {
  return (
      <Tabs
          screenOptions={{
            header: () => (
                <View style={{ width: 120 }}>
                  <Button title="back" onPress={() => router.back()} />
                </View>
            )
          }}
      >
      <Tabs.Screen name="summary" />
      <Tabs.Screen name="finance" />
      <Tabs.Screen name="events" />
      <Tabs.Screen name="documents" />
      <Tabs.Screen name="photo-albums" />
    </Tabs>
  )
}
