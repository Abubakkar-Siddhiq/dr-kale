import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <Text className="text-blue-500 text-5xl font-bold">Dr Kale.</Text>
      <Link href="/onboarding">oboaring</Link>
    </View>
  );
}
