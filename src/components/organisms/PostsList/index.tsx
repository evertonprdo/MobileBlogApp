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
            renderItem={
                ({item}) => (
                    <ItemList
                        id= {item.id}
                        title={item.titulo}
                        resumo={item.resumo.slice(0, 90).concat('...')}
                        thumbnail={item.thumbnail}
                    />
                )
            }
        />
    )
}