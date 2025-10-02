import { Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function MiddleScreen() {
  console.log("middle screen");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>Middle Screen</Text>
      <Link href="last-screen">{`Go to last screen >>`}</Link>
      <Text onPress={() => router.back()}>{`<< Go back`}</Text>
    </View>
  );
}
