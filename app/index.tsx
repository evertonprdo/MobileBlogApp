import { ActivityIndicator, Text, View, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import Styles from "@/styles/styles";
import PostList from "@/components/PostList";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Index() {
    const [ isLoading, setLoading ] = useState(true);
    const [ data, setData ] = useState<Post[]>([]);

    const getPostList = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setData(json);
            return json;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPostList();
    }, []);

    return (
        <View style={[ Styles.flex.centralize, { marginTop: 40 } ]}>
            { isLoading ? 
                ( <ActivityIndicator style= {Styles.flex.centralize} /> ) : 
                ( <PostList data= { data } /> )
            }
        </View>
    );
}