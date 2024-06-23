import { View, Image } from "react-native";

import styles from "./styles";

type ThumbnailProps = {
    thumb_uri: string
}

export default function Thumbnail({ thumb_uri }: ThumbnailProps) {
    return (
        <Image source={{ uri: thumb_uri }} style={styles.image} />
    )
}