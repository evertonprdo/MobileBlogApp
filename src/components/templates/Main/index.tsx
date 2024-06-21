import { View, StyleSheet } from "react-native";
import type { ReactNode } from "react";

type MainTemplateProps = {
    header: ReactNode
    body: ReactNode
    foot: ReactNode
    children: ReactNode
}

export default function MainTemplate({ header, body, foot, children }: MainTemplateProps) {
    return (
        <View style= {styles.flexCenter}>
            <View style= {[styles.flexCenter, {backgroundColor: '#ddd'}]}>
                { header }
            </View>

            <View style= {[styles.flexCenter, {backgroundColor: '#fff'}]}>
                { body }
            </View>

            <View style= {[styles.flexCenter, {backgroundColor: '#aaa'}]}>
                { foot }
            </View>

            <View style= {[styles.flexCenter, {backgroundColor: '#bbb'}]}>
                { children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    }
})