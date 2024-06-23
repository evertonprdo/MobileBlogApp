import { useLocalSearchParams } from "expo-router";

import DataPost, { Post } from "@/local-db/lista";
import { ScrollView, Image, Text, View } from "react-native";

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
        <ScrollView>
            <Image source={{uri: current_post?.thumbnail}} style= {{width: '100%', height: 300}} />
            <View style= {{paddingHorizontal: 10}}>
                <Text style= {{textAlign: 'justify', fontSize: 33, fontWeight: 'bold', marginBottom: 20}}>{current_post?.titulo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
            </View>
            <Image source={{uri: current_post?.thumbnail}} style= {{width: '100%', height: 300}} />
            <View style= {{paddingHorizontal: 10}}>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{}</Text>
                <Text style= {{textAlign: 'justify', fontSize: 18}}>{current_post?.resumo}</Text>
            </View>
        </ScrollView>
    )
}