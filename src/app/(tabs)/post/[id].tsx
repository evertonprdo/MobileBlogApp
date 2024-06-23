import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import DataPost, { Post } from "@/local-db/lista";

export default function PostScreen() {
    const { id } = useLocalSearchParams();
    const current_post: Post | null = (() => {
        for(const post of DataPost) {
            if(post.id === Number(id)) {
                return post;
            }
        }
        return null
    })()

    return (
        <View style= {{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <Text>{`Titulo: ${current_post?.titulo},\nResumo: ${current_post?.resumo}` }</Text>
        </View>
    )
}