import { Text } from "react-native"
import MainTemplate from "@/src/components/templates/Main"

import PostsList from "../organisms/PostsList"
import Posts from "@/local-db/lista"

export default function HomePage() {
    return (
        <MainTemplate
            header= { <Text>Header</Text> }
        >
            <PostsList 
                data= { Posts }
            />
        </MainTemplate>
    )
}