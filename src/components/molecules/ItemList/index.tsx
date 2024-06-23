import { Pressable, Text, Image, View } from "react-native";
import { Link } from "expo-router";

import type { Post } from "@/local-db/lista";
import styles from "./styles";

import Thumbnail from "../../atoms/Thumbnail";

export default function ItemList({ id, titulo, resumo, thumbnail }: Post) {
    return (
        <Link href={`post/${id}`} asChild>
            <Pressable style={styles.pressableContainer}>
                <View style={ styles.box } />
                <View style={styles.imageContainer}>
                    <Thumbnail thumb_uri={ thumbnail }/>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{titulo}</Text>
                    <Text style={styles.resume}>{resumo}</Text>
                </View>
            </Pressable>
        </Link>
    );
}