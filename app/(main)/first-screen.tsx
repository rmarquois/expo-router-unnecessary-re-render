import { Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function FirstScreen() {
  console.log("first screen");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>First Screen</Text>
      <Link href="middle-screen">{`Go to middle screen >>`}</Link>
      <Text onPress={() => router.back()}>{`<< Go back`}</Text>
    </View>
  );
}
