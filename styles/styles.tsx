import { StyleSheet } from "react-native"

import { Colors } from "@/constants/Colors"

namespace Styles {
    export const screen = StyleSheet.create({
        contentStyle: {
            backgroundColor: Colors.dark.background
        }
    })

    export const flex = StyleSheet.create({
        centralize: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}

export default Styles