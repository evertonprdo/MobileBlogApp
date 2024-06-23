import { ScrollView, View } from "react-native";
import type { ReactNode } from "react";

type ScreenProps = { children?: ReactNode }

export default function PostScreen({ children }: ScreenProps) {
    return (
        <ScrollView contentContainerStyle= {{height: '100%', width: '100%'}}>
            { children }
        </ScrollView>
    )
}