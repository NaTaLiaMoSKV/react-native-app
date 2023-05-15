import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
        right: 10,
        bottom: 10,
    },
    postsContainer: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems:'center',
    },
    userName: {
        fontWeight: 700,
        fontSize: 13,
        lineHeight: 15,
        color:'#212121',
    },
    userEmail: {
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 13,
        color:'rgba(33, 33, 33, 0.8)',
    },
});

export default styles;