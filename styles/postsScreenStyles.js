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
        alignItems: 'center',
        marginBottom: 10,
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
    profilePost: {
        marginBottom: 32,
        flexDirection: 'column',
    },
    profilePostName: {
        marginTop: 8,
        marginBottom: 10,
        fontFamily: 'Roboto-Medium',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
    profilePostDecription: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profilePostInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePostInfoText: {
        marginLeft: 5,
        marginRight: 25,
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',

    },
    profilePostLocationText: {
        marginLeft: 5,
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
});

export default styles;