import { Text, View, FlatList, StyleSheet, ViewStyle, Pressable } from "react-native";
import { Link, Redirect } from "expo-router";

import Styles from "@/styles/styles";
import { Colors } from "@/constants/Colors";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type PostItemComponentProps = {
    id: number;
    title: string;
    body: string;
    style?: ViewStyle | ViewStyle[];
}

export default function PostList({ data }: { data: Post[] } ) {
    return (
        <View style= { local_styles.listContainer }>
            <FlatList
                data= { data }
                keyExtractor= { ({title}) => title }
                renderItem={({item}) => (
                    <PostListItem
                        id= { item.id }
                        title= { item.title }
                        body= { item.body }
                        style= {local_styles.postListStyle}
                    />
                )}
                style= {{gap: 10}}
            />
        </View>
    )
}

function PostListItem({ id, title, body, style }: PostItemComponentProps) {
    return (
        <Link href={{
            pathname: "/post/[id]",
            params: { id: id }
        }} asChild>
            <Pressable style= { style }>
                    <View style= {[ local_styles.listTitleContainer, Styles.flex.centralize ]}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: Colors.dark.text }}>{ title }</Text>
                    </View>
                <View style= {[ local_styles.listBodyContainer, Styles.flex.centralize ]}>
                    <Text style={{ fontSize: 12, fontWeight: 'regular' }}>{ body }</Text>
                </View>
            </Pressable>
        </Link>
)}

const local_styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10
    },
    listTitleContainer: {
        height: 50,
        padding: 10,
        backgroundColor: '#283747',
        borderRadius: 5, 
    },
    listBodyContainer: {
        height: 100,
        backgroundColor: Colors.light.background,
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    postListStyle: {
        marginBottom: 10,
    },
    linkStyle: {

    }
})