import { Stack } from "expo-router";
import type { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";

const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    statusBarStyle: "light",
    statusBarTranslucent: true
}

export default function RootLayout() {
    return (
        <Stack screenOptions= { screenOptions as any }>
            <Stack.Screen name= "index" />
        </Stack>
    );
}