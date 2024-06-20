import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import type { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";

export default function RootLayout() {
    return (
        <Stack 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}

const styles = StyleSheet.create(
    {
        screenContainer: {
            
        }
    }
)