import { View } from "react-native";
import type { ReactNode } from "react";

import styles from "./styles";

type MainTemplateProps = {
    header: ReactNode
    children?: ReactNode
}

export default function MainTemplate({ header, children }: MainTemplateProps) {
    return (
        <View style= {styles.mainContainer}>
            <View style= { styles.headerContainer }>
                { header }
            </View>

            <View style= { styles.bodyContainer }>
                { children }
            </View>
        </View>
    )
}