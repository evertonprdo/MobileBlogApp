import { Text } from "react-native"
import MainTemplate from "@/src/components/templates/Main"

import data from "@/local-db/lista"

export default function HomePage() {
    return (
        <MainTemplate 
            header= { <Text>Header</Text> }
            body= { <Text>Body</Text> }
            foot= { <Text>Foot</Text> }
        >
            <Text>Test</Text>
        </MainTemplate>
    )
}