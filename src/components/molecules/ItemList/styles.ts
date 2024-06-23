import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pressableContainer: {
        flex: 1,
        flexDirection: 'row',

        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    imageContainer: {
        width: '30%',
        padding: 5,
        backgroundColor: '#fff',
        zIndex: 2
    },
    contentContainer: {
        width: '70%',
        height: 120,
        paddingHorizontal: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19
    },
    resume: {

    },
    box: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 77,
        height: 90,
        backgroundColor: '#cce7f0',
        zIndex:1
    }
})

export default styles;