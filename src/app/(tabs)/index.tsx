import { TextInput, View } from "react-native";
import HomePage from "@/src/components/pages/Home"

export default function Index() {
    return (
        <View style= {{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <HomePage />
        </View>
    )
}