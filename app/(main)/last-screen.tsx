import { Text, View } from "react-native";
import { router } from "expo-router";

export default function LastScreen() {
  console.log("last screen");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>Last Screen</Text>
      <Text onPress={() => router.back()}>{`<< Go back`}</Text>
    </View>
  );
}
