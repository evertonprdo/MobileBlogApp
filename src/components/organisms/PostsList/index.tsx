import { FlatList } from "react-native";

import type { Post } from "@/local-db/lista";
import ItemList from "../../molecules/ItemList";
import styles from "./styles";

type PostListProps = {
    data: Post[]
}

export default function PostsList({ data }: PostListProps) {
    return ( 
        <FlatList
            style= { styles.flatListContainer }
            data= { data }
            keyExtractor={(item) => item.titulo}
            renderItem={ ({item}) => (
                <ItemList
                    id= {item.id}
                    titulo= { resumString(item.titulo, 37) }
                    resumo= { resumString(item.resumo, 73) }
                    thumbnail= {item.thumbnail}
                />
            )}
        />
    )
}

function resumString(str: string, limit = 25): string {
    if (limit < str.length) {
        return str.slice(0, limit).concat('...')
    }
    return str;
}