import { View, Image, Text } from "react-native";

type PostViewProps = {
    titulo: string;
    resumo: string;
    thumbnail: string;
}

export default function PostView({ titulo, resumo, thumbnail }: PostViewProps) {
    return (
        <>
            <Image source={{uri: thumbnail}} style= {{width: '100%', height: '50%'}}/>
            <View>
                <Text style= {{fontSize: 33, fontWeight: 'bold'}}>{titulo}</Text>
                <Text style= {{fontSize: 25}}>{resumo}</Text>
                <Text style= {{fontSize: 25}}>{resumo}</Text>
                <Text style= {{fontSize: 25}}>{resumo}</Text>
            </View>
        </>
    )
}