import { FontAwesome } from "@expo/vector-icons"
import MainTemplate from "@/src/components/templates/Main"
import { View, Text } from "react-native"

import PostsList from "../organisms/PostsList"
import Posts from "@/local-db/lista"

export default function HomePage() {
    return (
        <MainTemplate
            header= {(
                <View style= {{flexDirection: 'row', gap: 12, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome
                        name="tencent-weibo"
                        size= { 23 }
                        color= { '#9ad1e3' }
                    />
                    <Text style= {{fontWeight: '500', fontSize: 20, letterSpacing: 1}}>TranscendGrounded</Text>
                </View>
            )
            }
        >
            <PostsList
                data= { Posts }
            />
        </MainTemplate>
    )
}