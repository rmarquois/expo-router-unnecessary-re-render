import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Root() {
  console.log("root");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>Welcome!</Text>
      <Link href="first-screen">{`Go to first screen >>`}</Link>
    </View>
  );
}
