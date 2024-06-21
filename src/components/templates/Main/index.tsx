import { View } from "react-native";
import type { ReactNode } from "react";

import styles from "./styles";

type MainTemplateProps = {
    header: ReactNode
    body: ReactNode
}

export default function MainTemplate({ header, body }: MainTemplateProps) {
    return (
        <View style= {styles.mainContainer}>
            <View style= { styles.headerContainer }>
                { header }
            </View>

            <View style= { styles.bodyContainer }>
                { body }
            </View>
        </View>
    )
}