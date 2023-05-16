import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 17,
        fontWeight: 600,
        color: '#282831',
        textAlign: 'center',
    },
    header: {
        width: '100%',
        height: 88,

        backgroundColor: '#fff',
        borderBottomColor: 'rgb(216, 216, 216)',
        shadowColor: 'rgb(216, 216, 216)',
        shadowOpacity: 0.85,
        color: '#282831',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    button: {
        position: 'absolute',
        left: 10,
        bottom: 5,
    },
    commentsContainer: {
        marginTop: 32,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})

export default styles;