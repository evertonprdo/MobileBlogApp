import { Pressable, Text, Image, View } from "react-native";
import { Link } from "expo-router";

import styles from "./styles";

export default function ItemList({ id, title, resumo, thumbnail }) {
    return (
        <Link href={`post/${id}`} asChild>
            <Pressable style={styles.pressableContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: thumbnail }} style={styles.image} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.resume}>{resumo}</Text>
                </View>
                <View style={ styles.box } />
            </Pressable>
        </Link>
    );
}
