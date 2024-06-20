import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

import Styles from "@/styles/styles";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Content() {
    const { id } = useLocalSearchParams();
    const [ isLoading, setLoading ] = useState(true);
    const [ data, setData ] = useState<Post>();

    const getPostList = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
        <View style={[ Styles.flex.centralize, local_styles.containerMain ]}>
            { isLoading ? 
                ( <ActivityIndicator style= {Styles.flex.centralize} /> ) : 
                (
                    <View style= {local_styles.container}>
                        <Text style={[ local_styles.title, {fontSize: 30} ]}>Fake Api Request</Text>
                        <View style= {{alignItems: 'center', gap: 10}}>
                            <Text style={ local_styles.title }> { data?.title } </Text>
                            <Text style={ local_styles.text }>Id: { data?.id } User Id:{ data?.userId }</Text>
                            <Text style={[ local_styles.text, {textAlign: 'justify'} ]}>{ data?.body } </Text>
                        </View>
                    </View> 
                )
            }
        </View>
    );
}

const local_styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    containerMain: {
        paddingVertical: 100,
    },
    container: {
        flex: 1,
        gap: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})